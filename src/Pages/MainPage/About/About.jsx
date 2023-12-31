
import style from "./About.module.css";

const About = () => {
  return (
    <div>
      <div className={style.About_page_wrapper}>
        <div className={style.About_page_content}>
          <h1>About Halal Job</h1>

          <p>
            Far much that one rank beheld bluebird after outside ignobly
            allegedly more when oh arrogantly vehement irresistibly fussy
            penguin insect <br />
            additionally wow absolutely crud meretriciously hastily dalmatian a
            glowered inset one echidna cassowary some parrot and much as
            goodness <br />
            some froze the sullen much connected bat wonderfully on
            instantaneously eel valiantly petted this along across highhandedly
            much.
          </p>

          <p>
            Repeatedly dreamed alas opossum but dramatically despite
            expeditiously that jeepers loosely yikes that as or eel underneath
            kept and slept <br />
            compactly far purred sure abidingly up above fitting to strident
            wiped set waywardly far the and pangolin horse approving paid
            chuckled <br />
            cassowary oh above a much opposite far much hypnotically more
            therefore wasp less that hey apart well like while superbly orca and
            far <br />
            hence one.Far much that one rank beheld bluebird after outside
            ignobly allegedly more when oh arrogantly vehement irresistibly
            fussy.
          </p>
        </div>



        <div className={style.job_account}>
          <div>
            <h2>4 Million</h2>
            <p>4 million daily active users</p>
            </div>

            <div>
              <h2>12k</h2>
              <p>Over 12k open job positions</p>
            </div>

            <div>
              <h2>20M</h2>
              <p>Over 20 million stories shared</p>
            </div>
        </div>




        <div className={style.about_work_process}>
          <h2>How it works?</h2>

          <p>Job for anyone, anywhere</p>

          <div className={style.about_work_process_wrapper}>
            <div className={style.about_work}>
              <img
                src={
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fwork-1.png&w=128&q=75"
                }
                alt="assignment"
              />
              <h3>Free Resume Assessments</h3>
              <p>
                Employers on average spend 31 seconds scanning <br /> resumes to
                identify potential matches.
              </p>
            </div>

            <div className={style.about_work}>
              <img
                src={
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fwork-2.png&w=128&q=75"
                }
                alt="scoring"
              />
              <h3>Job Fit Scoring</h3>
              <p>
                Employers on average spend 31 seconds scanning <br /> resumes to
                identify potential matches.
              </p>
            </div>

            <div className={style.about_work}>
              <img
                src={
                  "https://superio-appdir.vercel.app/_next/image?url=%2Fimages%2Fresource%2Fwork-3.png&w=128&q=75"
                }
                alt="help"
              />
              <h3>Help Every Step of the Way</h3>
              <p>
                Employers on average spend 31 seconds scanning <br /> resumes to
                identify potential matches.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
