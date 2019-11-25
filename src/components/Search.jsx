var Search = (props) => (
  <div className="search-bar form-inline">
    <input className="form-control" type="text" onChange={ (e) => props.query(e) } />  {/* (e) => props.input(e.target.value) passes in `e.target.value` as `e`, so handleSearch(e) would be returning `this.setState({input: e.target.value.target.value})` */}

    <button className="btn hidden-sm-down" onClick={() => props.appSubmit()} >
      <span className="glyphicon glyphicon-search"></span>
    </button>
  </div>
);

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
export default Search;
