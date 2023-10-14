import './skills.css'
import UIDesign from '../../assets/ui-design.png'
import WebDesign from '../../assets/website-design.png'
import AppDesign from '../../assets/app-design.png'

const Skills = () => {
  return (
    <section id="skills">
      <span className="skillTitle">What I do</span>
      <span className="skillDesc">I am a skilled and passionate web developer with experience in creating user-friendly websites and highly scalable website.</span>
      <span className="skillDesc">I am also passionate to continue my career in AI-driven jobs such as SDE, DS, and MLE. I have a solid knowledge of AI platform building, state-of-the-art NLP methods and LLM models, and a deep understand of deep learning.</span>
      <div className="skillBars">
        <div className="skillBar">
          <img src={UIDesign} alt="UI Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>UI/UX Design</h2>
            <p>This is a demo text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={WebDesign} alt="Web Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>Web Design</h2>
            <p>This is a demo text</p>
          </div>
        </div>
        <div className="skillBar">
          <img src={AppDesign} alt="App Design" className="skillBarImg" />
          <div className="skillBarText">
            <h2>App Design</h2>
            <p>This is a demo text</p>
          </div>
        </div>
      </div>
    </section>
  )
}
export default Skills