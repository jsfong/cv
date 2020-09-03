import React from "react";
import classes from './Skill.module.css';
import Features from './Features/Features';

import feature_data from './Data/Features.json'

function creatFeature(data) {
    return (
        <Features
            id={data.id}
            icon={data.icon}
            title={data.title}
            description={data.description}
        />
    )

}

function Skill() {
    return (
        <section className={classes.skillSection}>
            <h2>My Specialities</h2>
            <div class="container-fluid">
                <div class="row">
                    {feature_data.map(creatFeature)}
                </div>
            </div>
        </section>
    );
}


export default Skill;