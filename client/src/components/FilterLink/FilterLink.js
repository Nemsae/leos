import React from 'react';

import './styles.css';

/* props.filter DOES CHANGE HERE */
// class FilterLink extends React.Component {
//   render() {
//     console.log('this.props.filter: ', this.props.filter);
//     console.log('this.props.filterType: ', this.props.filterType);
//     console.log(this.props.filter === this.props.filterType);
//     return (
//       this.props.filter === this.props.filterType ?
//         <span className='active-link'>{this.props.children}</span>
//         :
//         <a id={this.props.filterType} className='link' href='' onClick={this.props.setFilter}>
//           {this.props.children}
//         </a>
//     );
//   }
// }

const FilterLink = props => (
  props.filter === props.filterType ?
    <span className='active-link'>{props.children}</span>
    :
    <a id={props.filterType} className='link' href='' onClick={props.setFilter}>
      {props.children}
    </a>
);

// /* props.filter DOESN'T CHANGE HERE */
// const FilterLink = props => ({
//   render() {
//     console.log('props.filter: ', props.filter);
//     console.log('props.filterType: ', props.filterType);
//     console.log(props.filter === props.filterType);
//     return (
//       props.filter === props.filterType ?
//         <span className='active-link'>{props.children}</span>
//         :
//         <a id={props.filterType} className='link' href='' onClick={props.setFilter}>
//           {props.children}
//         </a>
//     );
//   },
// });

export default FilterLink;
