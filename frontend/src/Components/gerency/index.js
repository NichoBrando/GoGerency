import React from 'react';
import GenericHeader from './GenericHeader';
import containerDiv from './container-div';

const IndexGerency = () => {
  return (
    <React.Fragment>
      <containerDiv>
        <GenericHeader/>    
        <div className="h60 blue-grey lighten-4 p10 bt1">
          <p>
            Hello World!
          </p>
        </div>
      </containerDiv>
    </React.Fragment>
  );
}
export default IndexGerency;