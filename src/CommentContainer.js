import {connect} from 'react-redux';
import Comment from './Comment.js';
import {thumbUpComment} from './index.js';
import {thumbDownComment} from './index.js';

const mapDispatchToProps = dispatch => ({
	thumbUpComment: (id) => dispatch(thumbUpComment(id)),
	thumbDownComment: (id) => dispatch(thumbDownComment(id))
});

export default connect(null, mapDispatchToProps)(Comment);