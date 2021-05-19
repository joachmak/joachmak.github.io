import ExperienceItem from "./ExperienceItem";
import {Container, Grid, Typography} from "@material-ui/core";
import { useAll } from "@typesaurus/react";
import {ExperienceDoc} from "../types";
import {collection} from "typesaurus";

const experiencesCol = collection<ExperienceDoc>('experiences')

export default function Experience() {
    let styles = {
        GridContainer: {
            marginTop: 10,
        }
    }
    let [ experiences, experiencesStatus] = useAll(experiencesCol)
    if (experiencesStatus.loading) {
        return (
            <>
                Loading...
            </>
        )
    } else if (experiencesStatus.error) {
        console.log(experiencesStatus.error)
        return (
            <>

            </>
        )
    }
    return (
        <div>
            <Container>
                <Grid container direction={"column"}>
                    <Typography variant={"h5"}>My Experience</Typography>
                    <Grid container spacing={1} style={styles.GridContainer}>
                        {
                            experiences && experiences.map(experienceItem =>
                                <ExperienceItem
                                    key={experienceItem.ref.id}
                                    title={experienceItem.data.title}
                                    descriptionShort={experienceItem.data.descriptionShort}
                                    descriptionExtended={experienceItem.data.descriptionExtended}
                                    datePeriod={experienceItem.data.date}
                                    skills={experienceItem.data.skills}
                                    url={experienceItem.data.url}
                                />
                            )
                        }
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}