import memoryIcon from "../assets/images/icon-memory.svg";
import reactionIcon from "../assets/images/icon-reaction.svg";
import verbalIcon from "../assets/images/icon-verbal.svg";
import visualIcon from "../assets/images/icon-visual.svg";

function ResultsSummary() {
  return (
    <div className="flex min-h-screen justify-center items-center">
      <div className="flex flex-col sm:flex-row w-full md:w-[650px] md:h-[450px] sm:h-full justify-start items-start  rounded-3xl text-[18px] md:shadow-lg font-sans sm:shadow-none">
        {/* left part starts here */}
        <div className="flex flex-col justify-around w-full sm:w-full h-[450px] md:rounded-2xl sm:rounded-t-none p-6 items-center bg-gradient-to-b from-[--light-slate-blue] to-[--light-royal-blue] text-white">
          <div>
            <h2 className="text-2xl font-semibold text-[--light-lavender]">
              Your Result
            </h2>
          </div>
          <div className="h-[140px] w-[140px] rounded-[50%] shadow-inner flex flex-col items-center justify-center bg-gradient-to-b from-[--violet-blue-circle] to-[--persian-blue-circle]">
            <p className="text-[--white] text-6xl font-bold ">76</p>
            <p className="text-sm text-[--light-lavender] font-medium">
              of 100
            </p>
          </div>
          <div className="text-center">
            <h1 className="text-4xl text-[--white] font-semibold mb-4">
              Great
            </h1>
            <p className="text-[--light-lavender]">
              You Scored higher than 65% of
            </p>
            <p className="text-[--light-lavender]">
              {" "}
              the people who have taken{" "}
            </p>
            <p className="text-[--light-lavender]">these tests.</p>
          </div>
        </div>
        {/* left part ends here */}
        {/* right part starts here */}
        <div className="w-full  h-[450px] flex flex-col gap-7 py-11 px-5  ">
          <div>
            <h1 className="font-bold text-xl text-[--dark-gray-blue]">
              Summary
            </h1>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-center justify-between bg-[--light-red-reaction] p-3 rounded-lg font-semibold ">
              <div className="flex items-center justify-center gap-3 ">
                <img src={reactionIcon} alt="/icon" />
                <p className="text-[--light-red]">Reaction</p>
              </div>

              <p className="flex gap-2">
                {" "}
                <span className="text-[--dark-gray-blue]">80</span>
                <span className="text-[--light-lavender-text]">/</span>
                <span className="text-[--light-lavender-text]">100</span>{" "}
              </p>
            </div>
            <div className="flex items-center justify-between bg-[--orange-yellow-reaction] p-3 rounded-lg font-semibold ">
              <div className="flex items-center justify-center gap-3 ">
                <img src={memoryIcon} alt="/icon" />
                <p className="text-[--orange-yellow]">Memory</p>
              </div>

              <p className="flex gap-2">
                {" "}
                <span className="text-[--dark-gray-blue]">92</span>
                <span className="text-[--light-lavender-text]">/</span>
                <span className="text-[--light-lavender-text]">100</span>{" "}
              </p>
            </div>
            <div className="flex items-center justify-between bg-[--green-teal-reaction] p-3 rounded-lg font-semibold ">
              <div className="flex items-center justify-center gap-3 ">
                <img src={verbalIcon} alt="/icon" />
                <p className="text-[--green-teal]">Verbal</p>
              </div>

              <p className="flex gap-2">
                {" "}
                <span className="text-[--dark-gray-blue]">61</span>
                <span className="text-[--light-lavender-text]">/</span>
                <span className="text-[--light-lavender-text]">100</span>{" "}
              </p>
            </div>
            <div className="flex items-center justify-between bg-[--cobalt-blue-reaction] p-3 rounded-lg font-semibold ">
              <div className="flex items-center justify-center gap-3 ">
                <img src={visualIcon} alt="/icon" />
                <p className="text-[--cobalt-blue]">Visual</p>
              </div>

              <p className="flex gap-2">
                {" "}
                <span className="text-[--dark-gray-blue]">72</span>
                <span className="text-[--light-lavender-text]">/</span>
                <span className="text-[--light-lavender-text]">100</span>{" "}
              </p>
            </div>
          </div>
          <div>
            <button className="p-2 bg-[--dark-gray-blue] w-full rounded-3xl text-white cursor-pointer">
              Continue
            </button>
          </div>
        </div>
        {/* right part ends here */}
      </div>
    </div>
  );
}

export default ResultsSummary;
