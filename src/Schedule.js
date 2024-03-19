import './Schedule.css'

function R(x) {
  return Math.ceil(x / 5) * 5;
}

const Schedule = (data) => {
  return (
    <div className="table-container">
      <table className="custom-table">
        <thead>
          <tr>
            <th>Day 1</th>
            <th>Day 2</th>
            <th>Day 3</th>
            <th>Day 4</th>
            <th>Day 5</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 x {R(data.value * 0.480627088)}</td>
            <td>10 x {R(data.value * 0.481882591)}</td>
            <td>10 x {R(data.value * 0.481882591)}</td>
            <td>10 x {R(data.value * 0.481882591)}</td>
            <td>10 x {R(data.value * 0.481882591)}</td>
          </tr>
          <tr>
            <td>10 x {R(data.value * 0.553238866)}</td>
            <td>8 x {R(data.value * 0.553238866)}</td>
            <td>8 x {R(data.value * 0.553238866)}</td>
            <td>8 x {R(data.value * 0.553238866)}</td>
            <td>8 x {R(data.value * 0.553238866)}</td>
          </tr>
          <tr>
            <td>10 x {R(data.value * 0.610323887)}</td>
            <td>8 x {R(data.value * 0.610323887)}</td>
            <td>6 x {R(data.value * 0.610323887)}</td>
            <td>5 x {R(data.value * 0.702530364)}</td>
            <td>5 x {R(data.value * 0.702530364)}</td>
          </tr>
          <tr>
            <td>10 x {R(data.value * 0.667847227)}</td>
            <td>8 x {R(data.value * 0.666295547)}</td>
            <td>6 x {R(data.value * 0.723380567)}</td>
            <td>5 x {R(data.value * 0.801315789)}</td>
            <td>5 x {R(data.value * 0.801315789)}</td>
          </tr>
          <tr>
            <td>10 x {R(data.value * 0.721184819)}</td>
            <td>8 x {R(data.value * 0.723380567)}</td>
            <td>6 x {R(data.value * 0.780465587)}</td>
            <td>5 x {R(data.value * 0.8298583)}</td>
            <td>5 x {R(data.value * 0.8298583)}</td>
          </tr>
          <tr>
            <td></td>
            <td>8 x {R(data.value * 0.780465587)}</td>
            <td>6 x {R(data.value * 0.850708502)}</td>
            <td>5 x {R(data.value * 0.850708502)}</td>
            <td>5 x {R(data.value * 0.850708502)}</td>
          </tr>
          <tr>
            <td></td>
            <td></td>
            <td></td>
            <td>5 x {R(data.value * 0.872672065)}</td>
            <td>5 x {R(data.value * 0.850708502)}</td>
          </tr>
        </tbody>
      </table>
      <p></p>
      <table className="custom-table">
        <thead>
          <tr>
            <th>Day 6</th>
            <th>Day 7</th>
            <th>Day 8</th>
            <th>Day 9</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>10 x {R(data.value * 0.481882591)}</td>
            <td>10 x {R(data.value * 0.518117409)}</td>
            <td>10 x {R(data.value * 0.518117409)}</td>
            <td>10 x {R(data.value * 0.481882591)}</td>

          </tr>
          <tr>
            <td>8 x {R(data.value * 0.645445344)}</td>
            <td>8 x {R(data.value * 0.645445344)}</td>
            <td>8 x {R(data.value * 0.645445344)}</td>
            <td>8 x {R(data.value * 0.645445344)}</td>
          </tr>
          <tr>
            <td>6 x {R(data.value * 0.723380567)}</td>
            <td>6 x {R(data.value * 0.702530364)}</td>
            <td>6 x {R(data.value * 0.723380567)}</td>
            <td>6 x {R(data.value * 0.780465587)}</td>
          </tr>
          <tr>
            <td>4 x {R(data.value * 0.801315789)}</td>
            <td>4 x {R(data.value * 0.850708502)}</td>
            <td>4 x {R(data.value * 0.88694332)}</td>
            <td>4 x {R(data.value * 0.850708502)}</td>
          </tr>
          <tr>
            <td>4 x {R(data.value * 0.8298583)}</td>
            <td>3 x {R(data.value * 0.88694332)}</td>
            <td>3 x {R(data.value * 0.922064777)}</td>
            <td>3 x {R(data.value * 0.94291498)}</td>
          </tr>
          <tr>
            <td>4 x {R(data.value * 0.850708502)}</td>
            <td>2 x {R(data.value * 0.907793522)}</td>
            <td>2 x {R(data.value * 0.964878543)}</td>
            <td>2 x {R(data.value * 1.035121457)}</td>
          </tr>
          <tr>
            <td>4 x {R(data.value * 0.907793522)}</td>
            <td>1 x {R(data.value * 0.964878543)}</td>
            <td>1 x {R(data.value * 1.014271255)}</td>
            <td>1 x {R(data.value * 1.05708502)}</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Schedule;