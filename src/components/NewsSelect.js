import React from 'react';

const NewsSelect = () => {

    const optionsList = "To do";

    return(
        <div className="news-select">
            <select defaultValue="default">
            <option disabled value="default">
                Please select a title...
            </option>
            {optionsList}
        </select>
        </div>
    );
}

export default NewsSelect;