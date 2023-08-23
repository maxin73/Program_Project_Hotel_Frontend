import useFetch from "../../hooks/useFetch";
import "./propertyList.css"

const PropertyList = () => {
  const { data, loading, error } = useFetch(
    "/hotels/countByType"
    );

  const images = [
    "https://images.pexels.com/photos/2725675/pexels-photo-2725675.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1637112/pexels-photo-1637112.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/2373201/pexels-photo-2373201.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1287460/pexels-photo-1287460.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1064566/pexels-photo-1064566.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <div className="pList">
      {loading ? (
        "loading"
      ) : (
        <>
          {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  )
}

export default PropertyList