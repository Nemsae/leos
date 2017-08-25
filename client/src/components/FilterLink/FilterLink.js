import React from 'react';

import './styles.css';

class FilterLink extends React.Component {
  shouldComponentUpdate(nextProps) {
    // console.log('nextProps.filter: ', nextProps.filter);
    if (nextProps.filter !== this.props.filter) {
      // console.log('this.props.filter: ', this.props.filter);
      return true;
    }
  }

  render() {
    console.log('props.filter: ', this.props.filter);
    console.log('this.props.filterType: ', this.props.filterType);
    console.log(this.props.filter === this.props.filterType);
    return (
      this.props.filter === this.props.filterType ?
        <span className='active-link'>{this.props.children}</span>
        :
        <a id={this.props.filterType} className='link' href='' onClick={this.props.setFilter}>
          {this.props.children}
        </a>
    );
    // if (props.filter === props.filterType) {
    //   console.log('props.filter: ', props.filter);
    //   console.log('props.filterType: ', props.filterType);
    //   return <span className='active-link'>{props.children}</span>;
    // }
    // return (
    //   <a id={props.filterType} className='link' href='' onClick={props.setFilter}>
    //     {props.children}
    //   </a>
    // );
  }
};
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
//     // if (props.filter === props.filterType) {
//     //   console.log('props.filter: ', props.filter);
//     //   console.log('props.filterType: ', props.filterType);
//     //   return <span className='active-link'>{props.children}</span>;
//     // }
//     // return (
//     //   <a id={props.filterType} className='link' href='' onClick={props.setFilter}>
//     //     {props.children}
//     //   </a>
//     // );
//   },
// });

export default FilterLink;
