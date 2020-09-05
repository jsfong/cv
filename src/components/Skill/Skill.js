import React from "react";
import classes from './Skill.module.css';
import Features from './Features/Features';
import feature_data from './Data/Features.json';
import SkillPoint from './SkillPoint/SkillPoint';
import skill_data from './Data/Skill.json';

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


function creatSkill(data) {
    return (
        <SkillPoint
            id={data.id}
            name={data.name}
            point={data.point}
        />
    )
}


function Skill() {
    return (
        <div>
            <section className={classes.featuresSection}>
                <div className={`container-fluid`}>
                    <h2 className={classes.skillTitle}>My Specialities</h2>
                    <div class="row">
                        {feature_data.map(creatFeature)}
                    </div>
                </div>
            </section>
            <section className={classes.skillSection}>
                <div className={`container-fluid`}>
                    <h2 className={classes.skillTitle}>My Skill</h2>
                    <div class="row">
                        {skill_data.map(creatSkill)}
                    </div>
                </div>
            </section>
        </div>
    );
}


export default Skill;