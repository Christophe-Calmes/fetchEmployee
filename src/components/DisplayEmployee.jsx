import PropTypes from "prop-types";
const DisplayEmployee = ({ employee }) => {
    console.log(typeof(employee));
    const detailsEmployee = employee[0];
    return (
      detailsEmployee && (
        <div className='DisplaydetailsEmployee'>
          <img src={detailsEmployee?.picture?.medium} alt={detailsEmployee?.name?.first} />
          <ul>
            <li>Gender: {detailsEmployee?.gender}</li>
            <li>
              Name: {detailsEmployee?.name?.title} {detailsEmployee?.name?.last}{' '}
              {detailsEmployee?.name?.first}
            </li>
            <li>E-mail: {detailsEmployee?.email}</li>
            <li>
              Location: {detailsEmployee?.location?.street?.number}{' '}
              {detailsEmployee?.location?.street?.name}, {detailsEmployee?.location?.postcode}{' '}
              {detailsEmployee?.location?.city}
            </li>
          </ul>
        </div>
      )
    );
  }
DisplayEmployee.propTypes = {
    employee: PropTypes.object.isRequired,
    detailsEmployee: PropTypes.array.isRequired
}
export default DisplayEmployee