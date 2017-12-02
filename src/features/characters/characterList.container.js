import { connect } from 'react-redux'
import CharacterList from './characterList.component'
import { CoreActions } from './../../actions'

const mapStateToProps = state => {
    return {
        isFetching: state.core.isFetching,
        coreList: state.core.coreList
    }
}

const mapDispatchToProps = dispatch => {
    return {
    	invalidateCore: () => {
    		dispatch(CoreActions.invalidateCore())
    	},
        fetchCore: () => {
            dispatch(CoreActions.fetchCoreIfNeeded())
        }
    }
}

export const CharacterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterList)
