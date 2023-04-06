const Tags = (props) => {
  let { items, title } = props;

  return (
    <div className="card card-body mt-4">
      <div className="card-title">
        {title}
        </div>
      <div className="row">
        <div className="col-4">
            {items.map((tag , index) => {
              return <div key={index} className="col-4">
                {tag}
              </div>
            })}
        </div>
      </div>
    </div>
  );
};

export default Tags;
