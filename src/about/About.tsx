import {Avatar, Container, Grid} from "@material-ui/core";
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import profileImageSrc from "../media/img/profile.jpg"
import PersonalInfo from "./PersonalInfo";

let profileImgSize = 15;
const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        large: {
            width: theme.spacing(profileImgSize),
            height: theme.spacing(profileImgSize),
        },
        gridItem: {
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
            marginTop: 15,
        }
    }),
);

export default function About() {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <Grid container justify={"center"}>
                    <Grid item xs={12} lg={8} className={classes.gridItem}>
                        <Avatar alt="Joachim Maksim" src={profileImageSrc} className={classes.large} />
                        <PersonalInfo />
                    </Grid>
                </Grid>
            </Container>
        </div>
    )
}