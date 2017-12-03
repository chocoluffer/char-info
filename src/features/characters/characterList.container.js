import { connect } from 'react-redux'
import CharacterList from './characterList.component'
import { CoreActions } from './../../actions'

const mapStateToProps = state => {
    return {
        isFetching: state.core.isFetching,
        fullList: state.core.fullList,
        activeList: state.core.activeList,
        displaySpecific: state.core.displaySpecific
    }
}

const mapDispatchToProps = dispatch => {
    return {
    	invalidateCore: () => {
    		dispatch(CoreActions.invalidateCore())
    	},
        fetchCore: () => {
            dispatch(CoreActions.fetchCoreIfNeeded())
        },
        displaySpecific: (character) => {
            dispatch(CoreActions.displaySpecific(character))
        }
    }
}

export const CharacterListContainer = connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterList)
