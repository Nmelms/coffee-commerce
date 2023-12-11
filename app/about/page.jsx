import Image from "next/image";

const aboutPage = () => {
  return (
    <div className="mb-5 container about-page">
      <div className="row">
        <div className="col-12 mt-5">
          <div className="row">
            <div className="col-12 col-lg-6  order-lg-2">
              <h2>OUR STORY</h2>
              <span className="about-subTitle my-5">
                arcu ac tortor dignissim convallis aenean et tortor at risus
                viverra adipiscing at in tellusco
              </span>
              <p className="pt-5">
                sed turpis tincidunt id aliquet risus feugiat in ante metus
                dictum at tempor commodo ullamcorper a lacus vestibulum sed arcu
                non odio euismod lacinia at quis risus sed vulputate odio ut
                enim blandit volutpat maecenas volutpat blandit aliquam etiam
                erat velit scelerisque in dictum non consectetur a erat nam at
                lectus urna duis convallis convallis tellus id interdum velit
                laoreet id donec ultrices tincidunt arcu non sodales neque
                sodales ut etiam sit amet nisl purus in mollis nunc sed id
                semper risus in hendrerit gravida rutrum quisque non tellus orci
                ac auctor augue mauris augue neque gravida in fermentum et
                sollicitudin ac orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                fermentum odio eu feugiat pretium nibh ipsum consequat nisl vel
                pretium lectus quam id leo in vitae turpis massa sed elementum
                tempus egestas sed sed risus pretium quam vulputate dignissim
                suspendisse in est ante
              </p>
            </div>
            <div className="col-12 col-lg-3 d-flex justify-content-around align-items-lg-center order-lg-3 flex-lg-column">
              <div className="col-6">
                <Image
                  height={100}
                  width={100}
                  alt="coffee leaf"
                  src={"/coffee-leaf.png"}
                ></Image>
                <p> neque gravida </p>
              </div>
              <div className="col-6">
                <Image
                  height={100}
                  width={100}
                  alt="coffee leaf"
                  src={"/coffee-leaf.png"}
                />
                <p>augue neque in </p>
              </div>
            </div>
            <div className="col-12 col-lg-3  d-flex justify-content-around align-items-lg-center order-lg-1 flex-lg-column">
              <div className="col-6">
                <Image
                  height={100}
                  width={100}
                  alt="coffee leaf"
                  src={"/coffee-leaf.png"}
                />
                <p>amet nisl in</p>
              </div>
              <div className="col-6">
                <Image
                  height={100}
                  width={100}
                  alt="coffee leaf"
                  src={"/coffee-leaf.png"}
                />
                <p>nam at lectus</p>
              </div>
            </div>
          </div>
          <div className="row mt-5 d-flex">
            <div className="col-12 col-lg-6 d-flex justify-content-between flex-column bottom-about-border pb-5 pb-lg-0">
              <h3>proin nibh nisl condimentum id venenatis amet est</h3>
              <p>
                nam at lectus urna duis convallis convallis tellus id interdum
                velit laoreet id donec ultrices tincidunt arcu non sodales neque
                sodales ut etiam sit amet nisl purus in mollis nunc sed id
                semper risus in hendrerit gravida rutrum quisque non tellus orci
                ac auctor augue mauris augue neque gravida in fermentum et
                sollicitudin ac orci phasellus egestas tellus rutrum tellus
                pellentesque eu tincidunt tortor aliquam nulla facilisi cras
                fermentum odio
              </p>
            </div>
            <div className="col-12 col-lg-6 d-flex justify-content-between flex-column mt-5 mt-lg-0">
              <h3>turpis massa tincidunt dui ut ornare lectus sit </h3>
              <p>
                purus non enim praesent elementum facilisis leo vel fringilla
                est ullamcorper eget nulla facilisi etiam dignissim diam quis
                enim lobortis scelerisque fermentum dui faucibus in ornare quam
                viverra orci sagittis eu volutpat odio facilisis mauris sit amet
                massa vitae tortor condimentum lacinia quis vel eros donec ac
                odio tempor orci dapibus ultrices in iaculis nunc sed augue
                lacus viverra vitae congue eu consequat ac felis donec et odio
                pellentesque diam
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default aboutPage;
