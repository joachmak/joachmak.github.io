import {Link, Typography} from "@material-ui/core";
import PhoneIcon from '@material-ui/icons/Phone';
import MailIcon from '@material-ui/icons/Mail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';

export default function PersonalInfo() {
    let styles = {
        Typography: {
            display: "flex",
            alignItems: "center",
        },
        Icon: {
            marginRight: 5,
        },
        root: {
            marginLeft: 5,
        },
        Link: {
            display: "flex",
            alignItems: "center",
            textDecoration: "none",
        },
    }
    return(
        <>
            <div style={styles.root}>
                <Typography style={styles.Typography} color={"primary"} variant={"h5"}>
                    <Link style={styles.Link} href={"https://www.linkedin.com/in/joachim-maksim-3823a5197/"} target={"_blank"}>
                        <LinkedInIcon style={styles.Icon} />Joachim Maksim
                    </Link>
                </Typography>
                <Typography style={styles.Typography} variant={"body1"}><PhoneIcon style={styles.Icon} /> (+47) 473 00 567</Typography>
                <Typography style={styles.Typography} variant={"body1"}><MailIcon style={styles.Icon} /> joachimmaksim@gmail.com</Typography>
            </div>
        </>
    )
}