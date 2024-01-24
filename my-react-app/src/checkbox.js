const Checkbox = ({ label }) => {
    return (
      <div className="wrapper">
        <label>
          <input type="checkbox" />
          <span>{label}</span>
        </label>
      </div>
    );
  };
  export default Checkbox;