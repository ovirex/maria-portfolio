import aboutDescription from "../components/about-components/description.js";
import aboutSkill from "../components/about-components/skill.js";
import aboutFunFacts from "../components/about-components/fun-facts.js";

export default {
    template: `
    <div>
        <about-description></about-description>
        <h2 class="h1 mb-4">Work experience</h2>
        <div class="row mb-4">
            <about-skill 
                skill="Graphic Designer" 
                desc="From social media to flyers. Set the visual tone for brands in digital and print media." 
                svg_icon="#stack-1"
            ></about-skill>
            <about-skill 
                skill="Web Designer" 
                desc="Wireframing and prototyping. Create the website structure and the user interface." 
                svg_icon="#laptop-screen-1"
            ></about-skill>
        </div>
    </div>
    `,
    components: {
        aboutDescription,
        aboutSkill,
        aboutFunFacts,
    },
};
