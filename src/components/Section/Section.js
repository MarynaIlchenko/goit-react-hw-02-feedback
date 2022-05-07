import React, {Component} from "react";
import style from './Section.module.css';
import PropTypes from 'prop-types';

class Section extends Component{
    render() {
        const { title, children } = this.props;
        return (
            <div className={StyleSheet.Section}>
                <h2 className="Title">{title}</h2>
                {children}
            </div>
        )
    }
};
Section.propTypes = {
    title: PropTypes.string.isRequired,
    children: PropTypes.element.isRequired,
}

export default Section;