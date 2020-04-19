from lxml.html.clean import Cleaner
from flask import Flask, jsonify, Response
import grequests
import lxml.html
import json
import re
import requests
import gevent.monkey
gevent.monkey.patch_all()


app = Flask(__name__)


@app.route("/api/uk_data", methods=["GET"])
def get_tasks():
    def scrapeLoop(gazpacho):

        def trimWebsite(value):
            return re.sub(" ", "%20", value)

        def trimAllSpaces(value):
            return re.sub(" ", "", value)

        def trimEdgeSpace(value):
            return re.sub("(^ *)|( *$)", "", value)

        def trimDoublePlusSpace(value):
            return re.sub("  +", " ", value)

        def trimNewLine(value):
            return re.sub('r"\x92|\xa0|\t|\n|\r|\f|\v|\"', " ", value)

        def trimAlpha(value):
            return re.sub("[^0-9]", "", value)

        def convertNum(value):
            return re.sub("0", "+44", value, 1)

        def checkListExists(value):
            if len(value):
                # considered performing xpath here for
                return value[0].text_content()
            else:  # briefness, but will increase computation time
                return ""

        def checkDescriptionExists(value):
            if len(value):
                return cleanDescription.clean_html(value[0]).text_content()
            else:
                return ""

        gazpacho = lxml.html.fromstring(gazpacho.text)
        # TODO: see if more can be removed
        gazpacho = cleaner.clean_html(gazpacho)

        gazpacho = gazpacho.xpath("//div[@id='main-content']")[0]

        imageURL = gazpacho.xpath("//div[@class='charity-logo']")
        if len(imageURL):
            for img in imageURL[0].iterlinks():  # TODO: lxml instead of python
                if img[1] == "src":
                    imageURL = websiteURL + img[2]
                    break
        else:
            imageURL = ""

        charityLegalName = checkListExists(gazpacho.xpath(
            "//h1[@class='user-colour1']"))

        charityNum = checkListExists(gazpacho.xpath(
            "//div[@class='charity-hgroup']"))

        longDescription = checkDescriptionExists(gazpacho.xpath(  # removing all tags that cause problems
            "//div[@class='charity-description']"))

        addressLine1 = checkListExists(gazpacho.xpath(
            "//span[@itemprop='street-address']"))

        city = checkListExists(gazpacho.xpath("//span[@itemprop='locality']"))
        state = checkListExists(gazpacho.xpath("//span[@itemprop='region']"))
        postcode = checkListExists(gazpacho.xpath(
            "//span[@itemprop='postal-code']"))

        telephone = checkListExists(gazpacho.xpath("//span[@itemprop='tel']"))
        fax = checkListExists(gazpacho.xpath("//span[@itemprop='fax']"))

        # website has some backend service that links to there actual account, their twitter handle is usually displayed in text
        facebook = checkListExists(
            gazpacho.xpath("//p[@class='url-facebook']"))
        twitter = checkListExists(gazpacho.xpath("//p[@class='twitter']"))

        '''script in place that hides email
        email = checkListExists(gazpacho.xpath("//span[@itemprop='email']"))
        '''

        # All this regex conversion cannot be efficient...
        charityWebsite = checkListExists(
            gazpacho.xpath("//p[@class='url-web']"))
        imageURL = trimWebsite(imageURL)
        charityWebsite = trimWebsite(charityWebsite)
        addressLine1 = trimEdgeSpace(
            trimDoublePlusSpace(trimNewLine(addressLine1)))

        # something is removing quotes from string. Could be the checkDescExists function
        longDescription = trimEdgeSpace(
            trimDoublePlusSpace(trimNewLine(longDescription)))

        # this method does not work for 'Mr. & Mrs.'
        shortDescription = longDescription[:longDescription.find(
            ".")] + "..." if longDescription != "" else ""
        postcode = trimNewLine(trimAllSpaces(postcode))
        telephone = convertNum(trimAllSpaces(telephone))
        fax = convertNum(trimAllSpaces(fax))
        charityNum = trimAlpha(charityNum)

        '''
        Expenditure can be scraped off this website
        not sure of the legality of this as they 
        pay for it from a third party
        https://www.charityfinancials.com/
        '''

        charityJSON = {
            "charityLegalName": charityLegalName,
            "imageURL": imageURL,
            "charityWebsite": charityWebsite,
            "smallDescription": shortDescription,
            "longDescription": longDescription,
            "addressLine1": addressLine1,
            "state": state,
            "country": "UK",
            "postcode": postcode,
            "telephone": str(telephone),
            "fax": fax,
            "charityNumber": charityNum,
            "facebook": facebook,
            "twitter": twitter
        }

        with open('lmxl24.json', 'a', encoding='utf8') as outfile:
            json.dump(charityJSON, outfile, ensure_ascii=False)

        completeJSON.append(charityJSON)

    def threadLoop(soup):
        charityPages = []
        for button in soup.find_class("btn-action"):
            if (button.text_content() == "More"):
                for link in button.iterlinks():
                    charityPages.append(websiteURL + link[2])

        URLS = grequests.map((grequests.get(page)
                              for page in charityPages), size=8)

        '''
        use .imap generator and load more pages as they come through
        create a buffer of 2 pages
        add threading so whilst one thread is creating requests another is processing
        '''

        for gazpacho in URLS:
            scrapeLoop(gazpacho)

    def searchLoop(pages):

        loop = 0
        while loop <= pages:

            loop = loop + 1
            URL = baseURL + str(loop)
            searchPage = requests.get(URL)
            soup = lxml.html.fromstring(searchPage.text)

            threadLoop(soup)

            with open("completeTest3.json", "a") as outfile:
                json.dump(completeJSON, outfile)

        return completeJSON

    cleaner = Cleaner(links=False, style=True,
                      safe_attrs_only=False, javascript=True)
    cleanDescription = Cleaner(remove_tags=['p', 'span', 'a'])

    completeJSON = []

    websiteURL = "https://www.charitychoice.co.uk"
    baseURL = "https://www.charitychoice.co.uk/charities/search/?t=qsearch&q=all&onlinedonations=0&pid="

    initialSearch = requests.get(
        "https://www.charitychoice.co.uk/charities/search/?t=qsearch&q=all&onlinedonations=0&pid=1")
    minestrone = lxml.html.fromstring(
        initialSearch.text)

    pages = int(
        re.sub("[^0-9]", "", minestrone.find_class("total-pages")[0].text_content()))

    return jsonify(searchLoop(pages))


if __name__ == "__main__":
    app.run(port=5000, debug=True, host='0.0.0.0')
