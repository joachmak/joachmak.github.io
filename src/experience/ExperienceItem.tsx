import {
    Accordion,
    AccordionDetails,
    AccordionSummary,
    createStyles,
    makeStyles,
    Theme,
    Typography,
    Grid, Link, Chip
} from "@material-ui/core";
import { useState } from "react";
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

interface ExperienceItemProps {
    title:string;
    descriptionShort:string;
    descriptionExtended?:string;
    datePeriod:[Date, Date | null];
    url?:string;
    skills:string[];
}

const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        heading: {
            width: "100%",
        },
        secondaryHeading: {
            color: theme.palette.text.secondary,
        },
        skills: {
            color: theme.palette.text.secondary,
            marginTop: 10,
        },
        AccordionSummary: {
            display: "flex",
            flexDirection: "column",
            textAlign: "left",
        },
        Typography: {
            whiteSpace: "pre-line",
            textAlign: "left",
        },
        Chip: {
            marginRight: 5,
        }
    }),
);

export default function ExperienceItem(props:ExperienceItemProps) {
    const classes = useStyles();
    const [expanded, setExpanded] = useState<string | false>(false);
    const handleChange = (panel: string) => (event: React.ChangeEvent<{}>, isExpanded: boolean) => {
        setExpanded(isExpanded ? panel : false);
    };
    return (
        <>
            <Grid item xs={12} md={6}>
                <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')}>
                    <AccordionSummary
                        expandIcon={props.descriptionExtended && <ExpandMoreIcon />}
                    >
                        <div className={classes.AccordionSummary}>
                            <Typography variant={"h5"} className={classes.heading}>
                                {
                                    props.url ?
                                        <Link href={props.url} target={"_blank"}>{props.title}</Link> :
                                        props.title
                                }
                            </Typography>
                            <Typography className={classes.secondaryHeading}>{props.datePeriod[0].toDateString()} - {props.datePeriod[1] ? props.datePeriod[1]?.toDateString() : "Now"}</Typography>
                            <Typography className={classes.secondaryHeading}><i>{props.descriptionShort}</i></Typography>
                            <Typography className={classes.skills}>Skills acquired: {
                                props.skills.map(skill =>
                                    <Chip label={skill} color="secondary" className={classes.Chip} />
                                )
                            }
                            </Typography>
                        </div>
                    </AccordionSummary>
                    {
                        props.descriptionExtended &&
                            <AccordionDetails>
                                <Typography className={classes.Typography}>
                                    {props.descriptionExtended}
                                </Typography>
                            </AccordionDetails>
                    }
                </Accordion>
            </Grid>
        </>
    )
}