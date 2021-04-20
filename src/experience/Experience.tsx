import ExperienceItem from "./ExperienceItem";
import {Container, Grid, Typography} from "@material-ui/core";

export default function Experience() {
    let styles = {
        GridContainer: {
            marginTop: 10,
        }
    }
    let experienceItems:{title:string, descriptionShort:string, descriptionExtended?:string, datePeriod:[Date, Date | null], skills:string[], url:string}[] = [
        {
            title: "Orakel Support Services",
            descriptionShort: "Orakeltjenesten offers support to 28'000 students in Trondheim for NTNU IT's multiple systems.",
            descriptionExtended: "Test",
            datePeriod: [new Date("10 Feb 2020"), null],
            skills: ["Communication", "Learning"],
            url: "https://innsida.ntnu.no/wiki/-/wiki/English/Orakel+Support+Services"
        },
        {
            title:"Tutor at MentorNorge",
            descriptionShort:"I have been a private tutor in mathematics, English, Norwegian and IT for students aged 15-24.",
            datePeriod:[new Date("01 Sep 2018"), null],
            skills:["Communication", "Patience", "Mentorship"],
            url:"https://mentornorge.no/"
        },
        {
            title:"Digitization of Safety Datasheets",
            descriptionShort:"I prepared and managed the distribution of ~300 iPads containing Safety Datasheet software to multiple laboratories at NTNU.",
            descriptionExtended:"~300 iPads had to be prepared, and afterwards sent to different NTNU-laboratories in Trondheim, Ålesund and Gjøvik. \n\n The preparation stage involved preparing custom charging cables for the iPads, as regular cables would be too short, or charge too slow. The iPads had to be updated to a specified version, and WiFi-certificates had to be controlled before shipping. \n\n Once we started shipping the iPads, we noticed major mistakes in the spreadsheet we were provided. We had to contact every HMS coordinator in the spreadsheet, and control that the information was correct. In most cases it was incorrect, and we had to retrieve correct information. I was responsible for contacting coordinators, while my co-worker Livia Valenti updated the spreadsheet. As it was the middle of summer and most coordinators were on vacation, this turned out to be very challenging. \n\n When the spreadsheet problems started clearing up, we could start shipping. We were also given the chance to personally mount some of the iPads. We met up with a carpenter who showed us how to mount the iPads. We borrowed a car from NTNU, and went out to mount many of the iPads that were supposed to be installed in Trondheim. We also packed and sent out the remaining iPads to NTNU campuses outside of Trondheim.\n\nAll 300 iPads were successfully delivered and mounted. No iPads nor supplies (chargers, cables, etc.) needed to be sent additionally after we were finished.",
            datePeriod:[new Date("16 Jun 2020"), new Date("28 Nov 2020")],
            skills:["Communication", "Management", "Leadership"],
            url:"https://innsida.ntnu.no/wiki/-/wiki/Norsk/Digitale+sikkerhetsdatablader?_36_redirect=https%3A%2F%2Finnsida.ntnu.no%2Fwiki%2F-%2Fwiki%2Ftag%2Fsikkerhetsdatablad%3Fp_r_p_185834411_title%3DSafety%2Bdata%2Bsheets"
        },
        {
            title:"Hageprosjekt Website",
            descriptionShort:"I created a website for the owner of Hageprosjekt - a landscaping company established in Gjøvik.",
            descriptionExtended:"The website was created using Bootstrap and custom CSS/JS. I also created an update-system for the owner of the website to facilitate uploading new images from different projects. This system was created using PHP.",
            datePeriod:[new Date("01 Jun 2018"), new Date("01 Jul 2018")],
            skills:["Customer Relations", "Technical Abilities"],
            url:"http://www.hageprosjekt.no/",
        }
    ]
    return (
        <div>
            <Container>
                <Grid container direction={"column"}>
                    <Typography variant={"h5"}>My Experience</Typography>
                    <Grid container spacing={1} style={styles.GridContainer}>
                        {
                            experienceItems.map(experienceItem =>
                                <ExperienceItem
                                    title={experienceItem.title}
                                    descriptionShort={experienceItem.descriptionShort}
                                    descriptionExtended={experienceItem.descriptionExtended && experienceItem.descriptionExtended}
                                    datePeriod={experienceItem.datePeriod}
                                    url={experienceItem.url && experienceItem.url}
                                    skills={experienceItem.skills}
                                />
                            )
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}