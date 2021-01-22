import { connect } from 'react-redux';

import { changeFieldValue } from '../actions/searchBar'

import SearchBar from '../components/SearchBar';



const mapStateToProps = (state) => ({
    inputValue: state.searchBar.inputValue
    });
    
const mapDispatchToProps = (dispatch) => ({
    changeFieldValue: (search) => {
        dispatch(changeFieldValue(search))
    },
});
    
// Container
const SearchBarContainer = connect(
    mapStateToProps,
    mapDispatchToProps,
)(SearchBar);

// == Export
export default SearchBarContainer;