import React from "react";
import "../web/Style.css";
import { Link } from "react-router-dom";
import docs1 from "../assets/docs1.avif";

function Docs() {
  return (
    <div>
      <div className="navbar">
        <div className="container flex">
          <h1>Vikiwave</h1>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/features">Feautres</Link>
              </li>
              <li>
                <Link to="/docs">Docs</Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      {/* head */}
      <section className="docs-head bg-primary py-3">
        <div className="contaier grid">
          <div>
            <h1 className="xl"> Docs</h1>
            <p className="lead">Lear how to work with vikiwave plateform</p>
          </div>

          <img src={docs1} alt=""></img>
        </div>
      </section>

      {/* docs main */}
      <section className="docs-main my-4">
        <div className="container grid">
          <div className="card bg-light p-3">
            <h3 className="my-2"> Essentials</h3>
            <nav>
              <ul>
                <li>
                  <a  className="text-primary" href="">Itroduction</a>
                </li>
                <li>
                  <a href="">Aout Vikiwave</a>
                </li>
                <li>
                  <a href="">Installation</a>
                </li>
              </ul>
            </nav>

            <h3 className="my-2"> Deployement</h3>
            <nav>
              <ul>
                <li>
                  <a href="">Setting up a container</a>
                </li>
                <li>
                  <a href="">Using the CLI</a>
                </li>
                <li>
                  <a href="">Managing resourses</a>
                </li>
                <li>
                  <a href="">Upgrade a downgrade</a>
                </li>
              </ul>
            </nav>
          </div>

          <div className="card">
            <h2> Itroduction</h2>
            <p>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Excepturi recusandae harum suscipit quisquam distinctio aliquid?
              Saepe, nostrum officiis, voluptate exercitationem reprehenderit
              eius assumenda possimus nulla in adipisci voluptates id excepturi.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
              excepturi pariatur laboriosam! Repellendus, minus sunt dolorem
              nesciunt debitis nemo fugiat laboriosam soluta eius.
            </p>
            <div className="alert alert-success">
              <i className="fas fa-info"></i> Lorem ipsum dolor, sit amet
              consectetur adipisicing elit. Labore aliquam non eos a ipsa.
            </div>

            <h3>Lorem, ipsum dolor.</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti
              soluta delectus qui quibusdam a eligendi vero ipsa asperiores nemo
              sed?
            </p>
            <a href="" className="btn btn-primary">Install CLI</a>

            <h3>Requirments</h3>
            <ul>
                <li>Windows 10, Mac OSX, Liux</li>
                <li>javascript, v12 or higher</li>
            </ul>

            <h3>Install</h3>
            <p>Mac (Homebrew)</p>
            <pre><code>$ brew install loruki-cli</code></pre>
            <p>Npm</p>
            <pre><code>$ npm install loruki-cli</code></pre>
            <p>Mac Yarn</p>
            <pre><code>$ yarn install loruki-cli</code></pre>
          </div>
        </div>
      </section>

      <footer className="footer bg-dark py-5">
        <div className="container grid grid-3">
          <div>
            <h1>Vikiwave</h1>
            <p>Copyright & copy,2023</p>
          </div>

          <nav>
            <ul>
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Feautres</a>
              </li>
              <li>
                <a href="">Docs</a>
              </li>
            </ul>
          </nav>

          <div className="social">
            <a href="">
              <i className="fab fa-github fa-2x"></i>
            </a>
            <a href="">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="">
              <i className="fab fa-instagram fa-2x"></i>
            </a>
            <a href="">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Docs;
