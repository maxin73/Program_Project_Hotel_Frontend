import useFetch from "../../hooks/useFetch";
import "./featured.css"

const Featured = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByCity?cities=London,Venice,Paris"
  );
  // console.log(data);
  return (
    <div className="featured">
      {loading ? (
        "Loading please wait"
      ) : (
        <>
          <div className="featuredItem">
            <img src="https://images.pexels.com/photos/672532/pexels-photo-672532.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <div className="featuredTitles">
              <h1>London</h1>
              <h2>{data[0]} properties
              </h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="https://images.pexels.com/photos/161850/venice-grand-canal-water-boats-161850.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <div className="featuredTitles">
              <h1>Venice</h1>
              <h2>{data[1]} properties
              </h2>
            </div>
          </div>
          <div className="featuredItem">
            <img src="https://images.pexels.com/photos/1308940/pexels-photo-1308940.jpeg?auto=compress&cs=tinysrgb&w=600"/>
            <div className="featuredTitles">
              <h1>Paris</h1>
              <h2>{data[2]} properties
              </h2>
            </div>
          </div>
        </>
      )}
    </div>
  )
}

export default Featured