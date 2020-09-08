import React from "react";
import classes from './Experience.module.css';
import ExpItem from './Item/ExpItem';
import Exp_data from './Data/Experience.json';

function createExpItem(data){
    return(
        <ExpItem
            id={data.id}
            title={data.title}
            date={data.date}
            description={data.description}
        />
    )
}

function Experience() {

    return (
        <section  id="experience"  className={classes.experienceSection}>
            <h2 className={classes.experienceTitle}>Experience</h2>
            {Exp_data.map(createExpItem)}
        </section>
    );

}

export default Experience;