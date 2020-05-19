'use strict';

const e_01 = React.createElement;

class LikeButton_01 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'You liked comment number ' + this.props.commentID;
    }

    return e_01(
      'button',
      { onClick: () => this.setState({ liked: true }) },
      'Like'
    );
  }
}

// Find all DOM containers, and render Like buttons into them.
document.querySelectorAll('.like_button_container')
  .forEach(domContainer => {
    // Read the comment ID from a data-* attribute.
    const bv_commentID = parseInt(domContainer.dataset.bv_prop_personalizada, 10);
    ReactDOM.render(
      e_01(LikeButton_01, { commentID: bv_commentID }),
      domContainer
    );
  });