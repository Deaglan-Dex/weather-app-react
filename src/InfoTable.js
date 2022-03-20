import Raincloud from './Torrential_Rain.png';
import Thermometer from './Dew_Point.png';
import Wind from './Wind.png';

const InfoTable = () => {
  return (
    <div>
        <table className = "infoTable">
          <tbody>
            <tr>
              <td>
                <img src = {Raincloud} alt = "info"/>
                <figcaption>lmao</figcaption>
              </td>
              <td>
                <img src = {Thermometer} alt = "info"/>
                <figcaption>lmao</figcaption>
              </td>
              <td>
                <img src = {Wind} alt = "info"/>
                <figcaption>lmao</figcaption>
              </td>
            </tr>
            <tr>
              <td>
              <img src = {Raincloud} alt = "info"/>
              <figcaption>lmao</figcaption>
              </td>
              <td>
              <img src = {Thermometer} alt = "info"/>
              <figcaption>lmao</figcaption>
              </td>
              <td>
                <img src = {Wind} alt = "info"/>
                <figcaption>lmao</figcaption>
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}

export default InfoTable