import Hero from "../../Hero"
import Sectionintro from "../../Sectionintro"
import SectionParallaxe from "../../SectionParallaxe"
import Sectiongalerie from "../../Sectiongalerie"
// import Card from "../../Card"
import SectionAbout from "../../SectionAbout"
import Secimage from "../../Secimage"
const Home = () => {
    
    return (
        <div className='home'>
            <Hero />
            <Sectionintro />
            <SectionParallaxe />
            <Sectiongalerie />
            {/* <Card /> */}
            <SectionAbout />
            <Secimage/>
            
            
        </div>
)
}

export default Home