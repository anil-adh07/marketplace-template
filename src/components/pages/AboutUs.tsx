const AboutUs = () => {
  return (
    <>
      <div className="grid md:grid-cols-2 border-x border-b border-primaryA2">
        <div className="text-primaryA1 flex flex-col justify-between p-5 border-b md:border-b-0 md:border-r border-primaryA2">
          <h1 className="text-3xl md:text-5xl font-modern pt-4"> ABOUT US</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto
            expedita voluptas tempore quibusdam tempora accusamus labore vitae
            incidunt aperiam facilis? Lorem ipsum dolor sit amet, consectetur
            adipisicing elit. Architecto expedita voluptas tempore quibusdam
            tempora accusamus labore vitae incidunt aperiam facilis?
          </p>
        </div>
        <div className="text-primaryA1 p-5 flex flex-col justify-between">
          <img
            className="w-full h-1/2 object-cover"
            src="/images/shopall.jpeg"
            alt=""
          ></img>

          <div className="flex flex-col justify-between ">
            <h1 className="text-3xl md:text-5xl font-modern pt-8 text-center pb-4">
              Our Story
            </h1>
            <p className="text-center pb-4">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ipsa
              nobis inventore id possimus, nulla nisi asperiores? Ipsum
              molestiae impedit delectus ut laboriosam dolores numquam vitae!
            </p>
          </div>
        </div>
      </div>
      <div className="text-primaryA1 p-5 border-x border-b border-primaryA2 text-center md:text-left">
        <h1 className="font-modern text-3xl md:text-5xl mt-4 text-center">
          Once in our History
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 mt-10 text-balance">
          <div className="md:border-r border-b md:border-b-0 border-primaryA2 my-4 pr-8">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              deserunt ex neque odit sapiente. Numquam reprehenderit excepturi
              nesciunt laboriosam atque corrupti quidem commodi exercitationem
              ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum, nihil quia? Labore ut obcaecati sit, nostrum doloribus
              harum earum, sint at praesentium necessitatibus assumenda vel
              eveniet, sapiente qui neque libero aperiam ipsum nobis dolore!
              Mollitia maiores eaque eligendi doloremque dolorem, qui ratione
              tempora, cum beatae ad quibusdam molestias delectus pariatur.
            </p>
            <p className="my-5">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              deserunt ex neque odit sapiente. Numquam reprehenderit excepturi
              nesciunt laboriosam atque corrupti quidem commodi exercitationem
              ipsum? Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Ipsum, nihil quia? Labore ut obcaecati sit, nostrum doloribus
              harum earum, sint at praesentium necessitatibus assumenda vel
              eveniet, sapiente qui neque libero aperiam ipsum nobis dolore!
              Mollitia maiores eaque eligendi doloremque dolorem, qui ratione
              tempora, cum beatae ad quibusdam molestias delectus pariatur.
            </p>
          </div>
          <div className="my-4 md:pl-8">
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae
              voluptatem eius dolore itaque modi reprehenderit, iusto in
              corrupti aliquam! Quos culpa officiis voluptas recusandae velit.
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Id, ab
              delectus. Aspernatur totam, laudantium corrupti non dolorum harum
              veritatis voluptatum, enim laboriosam beatae ratione esse magnam.
              Consectetur reiciendis sunt quidem obcaecati quod, unde
              consequuntur atque, commodi exercitationem asperiores nisi sed
              inventore error, incidunt tenetur optio! Ea neque ipsa id quod.
            </p>
            <p className="mt-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Voluptatum nisi velit tenetur necessitatibus placeat ratione vitae
              blanditiis eveniet incidunt sed.`
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 border-b border-x border-primaryA2">
        <div className=" md:ml-5 md:my-5 mt-5 mx-5 md:mx-0">
          <img
            className="h-screen w-screen md:w-full object-cover p-8 bg-primaryA1"
            src="/images/founder.avif"
            alt="image"
          ></img>
        </div>

        <div className=" flex justify-center items-center md:mr-5 md:my-5 mx-5 md:mx-0 mb-5 bg-primaryA1">
          <div className="text-white md:w-full">
            <h1 className="text-4xl md:text-5xl leading-10 font-modern md:text-left text-center mt-5">
              Message From the Founder- Sarah Naoh
            </h1>
            <p className="py-4 mx-4 md:mr-4 md:ml-0 text-center md:text-left">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rem
              eligendi cupiditate voluptatibus perferendis fugiat at inventore
              labore repellendus quas aliquid deleniti quam corporis, nisi
              maiores quod tenetur vero nostrum doloremque!
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
export default AboutUs;
