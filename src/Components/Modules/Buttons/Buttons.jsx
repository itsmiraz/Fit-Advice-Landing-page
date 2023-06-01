import PropTypes from 'prop-types';
const MainButton = ({title}) => {
    return (
        <button className='text-lg md:text-xl font-semibold text-[#222222] px-6 py-3 rounded-full  bg-gradient-to-b from-[#3EFFFF] to-[#00FF99]'>
            {
              title
            }
        </button>
    );
};
MainButton.propTypes = {
    title: PropTypes.string.isRequired,
  };
export default MainButton;