

const Values = () => {

    const datas = [
      {
        title: "Excellence",
        body: "We constantly strive for excellence in everything we do, offering high-quality services and delivering outstanding results to our users.",
      },
      {
        title: "Collaboration",
        body: "We believe in collaboration and team spirit. Together with our professional trainers, users and partners, we create a harmonious and rewarding experience.",
      },
      {
        title: "Innovation",
        body: "We are constantly looking for new ideas and new technologies to improve our services and offer an innovative and engaging user experience.",
      },
      {
        title: "Integrity",
        body: "We act with integrity and transparency in all our interactions, respecting the confidentiality of our users' data and maintaining high ethical standards.",
      },

      {
        title: "Commitment to well-being",
        body: "We believe in collaboration and team spirit. Together with our professional trainers, users and partners, we create a harmonious and rewarding experience.",
      },
      {
        title: "Commitment to well-being",
        body: "We are passionate about physical well-being. We are committed to supporting and inspiring our users on their journey towards a healthy, balanced life.",
      },
    ];
console.log(datas)
    return (
      <div className="pt-[173px] text-[#231F20]">
        <h1 className="text-[42px] font-bold text-center">Our Values</h1>
        <p className="text-2xl pt-[16px] text-center">
          <span>
            We believe that the only way to realise this vision is to respect
            six core values.
          </span>
          <br />
          <span>
            These values define how we work internally and how we interact with
            our customers.
          </span>
        </p>

        <div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-3 gap-14 pt-[74px] pb-[157px]">
          {datas.map((data, index) => (
            <div
              key={index}
              className="relative block rounded-[25px] border-b-4 border-[#3EFFFF]  shadow-xl p-4 sm:p-6 lg:p-4"
            >
              <div className="flex-col-reverse text-center pt-[40px]">
                <h1 className="text-[17px] md:text-[18px] lg:text-[20px] font-bold">
                  {data.title}
                </h1>
                <p className="text-xl pt-[26px]">{data.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
};

export default Values;