import {Container, Grid, Typography} from "@material-ui/core";

export default function TechnicalSkills() {
    let styles = {
        GridContainer: {
            marginTop: 10,
        },
        Title: {
            marginTop: 20,
        }
    }
    return (
        <div>
            <Container>

                <Grid container direction={"column"}>
                    <Typography variant={"h5"} style={styles.Title}>My Technical Skill Set</Typography>
                    <Grid container spacing={1} style={styles.GridContainer}>

                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}