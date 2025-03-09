const ColorArea = ({ squareProps, handleColorChange }) => {
  return (
    <div className="row align-items-center">
      <div className="col-xxl-3 col-12">
        <h2 className="text-component">Color</h2>
      </div>
      <div className="col-xxl-9 col-12">
        <div className="input-group color-group">
          <input
            type="color"
            name="color"
            value={squareProps.color}
            onChange={handleColorChange}
          />
          <input
            type="text"
            value={squareProps.color}
            onChange={handleColorChange}
          />
          <input
            type="text"
            value={"100%"}
            // onChange={handleColorChange}
          />
        </div>
      </div>
    </div>
  );
};

export default ColorArea;
