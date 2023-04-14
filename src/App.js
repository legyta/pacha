import logo from "./logo-grey.png";
import "./App.css";
import taco from "taco.pdf";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div id="report" class="register-box-body">
          <p class="login-box-msg">Laboratory Result</p>{" "}
          <div class="box-header with-border">
            <h3 class="box-title">Animal</h3>
          </div>{" "}
          <div class="box-body">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <b>Animal species</b>
                  </td>{" "}
                  <td>DOG</td>
                </tr>{" "}
                <tr>
                  <td>
                    <b>Microchip number</b>
                  </td>{" "}
                  <td>756098060034414</td>
                </tr>{" "}
                <tr>
                  <td>
                    <b>Sex</b>
                  </td>{" "}
                  <td>MALE</td>
                </tr>{" "}
                <tr>
                  <td>
                    <b>Date of birth</b>
                  </td>{" "}
                  <td>15/06/2022</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div class="box-header with-border">
            <h3 class="box-title">Report</h3>
          </div>{" "}
          <div class="box-body">
            <table class="table table-bordered">
              <tbody>
                <tr>
                  <td>
                    <b>Report date</b>
                  </td>{" "}
                  <td>02/01/2023</td>
                </tr>{" "}
                <tr>
                  <td>
                    <b>Material</b>
                  </td>{" "}
                  <td>BLOOD SERUM</td>
                </tr>{" "}
                <tr>
                  <td>
                    <b>RABIES ANTIBODY TITRATION</b>
                  </td>{" "}
                  <td>greater or equal to 0.5 IU/ml </td>
                </tr>
              </tbody>
            </table>
          </div>{" "}
          <div class="row">
            <div class="col-xs-12">
              <a href={taco} class="btn btn-primary btn-block btn-flat">
                Download report (pdf format)
              </a>
            </div>
          </div>
        </div>
        <div class="credentials-div">
          <p class="credentials">
            This report was generated by&nbsp;
            <a href="https://www.izsvenezie.it/" target="_blank">
              Istituto Zooprofilattico delle Venezie
            </a>
            &nbsp;and is blockchain certified by&nbsp;
            <a href="https://projectesse.org" target="_blank">
              ESSE Tech
            </a>
            .
          </p>
        </div>
      </header>
    </div>
  );
}

export default App;
