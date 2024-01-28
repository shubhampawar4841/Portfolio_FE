import { NavLink } from "react-router-dom";
// import { Analytics } from "../components/Analytics";

export const About = () => {
  return (
    <>
      <main>
        <section className="section-hero">
          <div className="container grid grid-two-cols">
            <div className="hero-content">
              {/* <p>We care to cure your Health</p> */}

              <h1>Description of this WebSite </h1>
              <p></p>
              <p>
                In this projects, I've implemented user registration and login
                functionality with secure password hashing using bcrypt.
              </p>
              <p>
                By incorporating Zod for schema validation, I ensure that user
                input is validated according to predefined schemas, enhancing
                data integrity and security. Additionally, I've implemented
                robust authorization and authentication mechanisms, leveraging
                JWT (JSON Web Tokens) for secure user authentication and
                authorization processes.
              </p>
              <p>
                To enhance security and mitigate potential vulnerabilities, I
                have implemented CORS (Cross-Origin Resource Sharing) policies
                to control access to server resources from different origins
              </p>
              <p>
                In summary, my expertise lies in developing secure and scalable
                MERN stack applications, with a focus on implementing robust
                authentication and authorization systems, secure password
                hashing, CORS policies, JWT token management, and thorough input
                validation.
              </p>
              <div className="btn btn-group">
                <NavLink to="/contact">
                  <button className="btn"> Connect Now</button>
                </NavLink>
                <button className="btn secondary-btn">learn more</button>
              </div>
            </div>
            <div className="hero-image">
              <img
                src="/images/about.png"
                alt="coding buddies "
                width="400"
                height="500"
              />
            </div>
          </div>
        </section>
      </main>

      {/* <Analytics /> */}
    </>
  );
};
