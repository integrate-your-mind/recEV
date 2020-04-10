import requests
import re
from bs4 import BeautifulSoup
from flask import Flask, jsonify, Response
import json

app = Flask(__name__)
@app.route("/api/uk_data", methods=["GET"])

def get_tasks():
    def ScrapePage(charityPage):

        def trimWhiteSpace(value, frequency):
            return re.sub(" ", "", value,frequency)

        def trimWebsite(value):
            return re.sub(" ","%20",value)

        def trimFirstSpace(value):
            return re.sub("^ ", "",value)

        charityLegalName = ""
        imageURL = ""
        charityNum = ""
        smallDescription = ""
        longDescription = ""
        addressLine1 = ""
        addressLineOne = ""
        city = ""
        postcode = []
        state = ""
        telephone = ""
        charityWebsite = ""
        imageURL = ""

        charityPage = requests.get(charityPage)
        gazpacho = BeautifulSoup(charityPage.content, "html.parser")

        header = gazpacho.find("div", "charity-header")
        # header contains imageURL, charityLegalName, charityNum
        if header != None:
            charityNum = header.find("div", "charity-hgroup")
            if charityNum == None:
                charityNum = ""
            else:
                charityNum = re.sub("[^0-9]", "", str(charityNum.p))

            imageURL = header.find(alt="").a
            if imageURL == None:
                imageURL = ""
            else:
                imageURL = websiteURL + imageURL.img["src"]

            charityLegalName = header.find("div", "charity-hgroup").h1
            if charityLegalName == None:
                charityLegalName = ""
            else:
                charityLegalName = charityLegalName.string

        content = gazpacho.find("div", "content-column")
        # content contains the rest

        if content != None:
            charityWebsite = content.find(target="external")
            if charityWebsite == None:
                charityWebsite = ""
            else:
                charityWebsite = charityWebsite.string

            charityDescriptions = content.find("div", "charity-description")
            if charityDescriptions == None:
                longDescription = ""
                shortDescription = ""
            else:
                for shortdesc in charityDescriptions:
                    if shortdesc.string == (None or "\n"):
                        continue
                    else:
                        shortDescription = shortdesc.string
                        break
                for desc in charityDescriptions:
                    if desc.string == None:
                        break
                    else:
                        longDescription = longDescription + re.sub(".$",". ", desc.string)


        contactTag = gazpacho.find("address")
        if contactTag != None:

            addressLine1 = contactTag.find(itemprop="street-address")
            if addressLine1 == None:
                addressLineOne = ""
            else:
                addressLineOne = ""
                for (
                    string
                ) in addressLine1.stripped_strings:  ##sometimes people have put all
                    addressLineOne = (                  ##of the address here, could seperate if <br>
                        addressLineOne + " " + string
                    )
                    # addressLineOne = addressLineOne, 1)

            city = contactTag.find(itemprop="locality")
            if city == None:
                city = ""
            else:
                city = city.string

            state = contactTag.find(itemprop="region")
            if state == None:
                state = ""
            else:
                state = state.string

            postcode = contactTag.find(itemprop="postal-code")
            if postcode == None:
                postcode = ""
            else:
                postcode = postcode.string

            telephone = contactTag.find(itemprop="tel")
            if telephone == None:
                telephone = ""
            else:
                telephone = telephone.string

        ##add function that collects volunteer page?
        ##link to donation area is on each page, could be worth scraping

        # TODO: Trim all values, not the keys of any whitespace, make sure all quotes are closing properly, and the json is being formatted properly.
        imageURL = trimWebsite(imageURL)
        charityWebsite = trimWebsite(charityWebsite)
        addressLineOne = trimFirstSpace(addressLineOne)
        postcode = trimWhiteSpace(str(postcode),0)
        telephone = trimWhiteSpace(str(telephone),0)

        charityJSON = {
                "charityLegalName": charityLegalName,
                "imageURL": imageURL,
                "charityWebsite": charityWebsite,
                "smallDescription": shortDescription,                       #from the  ##basically all the descriptions were long we can parse some
                "longDescription": re.sub('\n|\xa0', '', longDescription) ,      ##of them and include the first para in small and then the
                "addressLine1": addressLineOne,                                ##whole thing in long? Might be a bit janky
                "city": city,
                "state": state,
                "country": "UK",
                "postcode": postcode,
                "telephone": str(telephone),
                "charityNumber": charityNum
        }
        #array.append(charity.json);
        return charityJSON
        # for testing:




    def dataLoop():
        loop = 1

        baseURL = "https://www.charitychoice.co.uk/charities/search/?t=qsearch&q=all&onlinedonations=0&pid="
        URL = baseURL + str(loop)
        searchPage = requests.get(URL)
        soup = BeautifulSoup(searchPage.content, "html.parser")
        pages = int(
            str(re.sub("[^0-9]", "", str(soup.find(string=re.compile("pages")))))
        )  ##This is unreadable lmao
        ##also these variables have to be here as pages is read from the search site

        while loop <= pages:
            for links in soup.find_all(re.compile("a")):
                if links.string == "More":
                    completeJSON.append(ScrapePage(websiteURL + links["href"]))

            with open('data_s6.json', 'w') as outfile:
              json.dump(completeJSON, outfile)
            loop = loop + 1
            URL = baseURL + str(loop)
            searchPage = requests.get(URL)
            soup = BeautifulSoup(searchPage.content, "html.parser")
        return str(completeJSON)

    websiteURL = "https://www.charitychoice.co.uk"
    completeJSON = []
    return dataLoop()


if __name__ == "__main__":
    app.run(debug=True)
