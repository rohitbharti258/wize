import React, { useCallback, useState } from "react";
import { IoIosArrowRoundDown, IoIosArrowRoundForward } from "react-icons/io";
import { MdDescription } from "react-icons/md";

const AllAssessments = props => {
	const allAssessements = props.allAssessements;

	const [activeIndex, setActiveIndex] = useState(-1);

	const CardComponent = ({ data, index }) => {
		const { text, imgURL, description } = data;

		return (
			<>
				<div
					style={{ backgroundImage: "url('src/assets/allAssessmentsBG.JPG')", borderColor: index !== activeIndex ? "#FFFFFF" : "#8C52FF" }}
					className="w-[48%] h-[200px] mt-5 rounded-lg shadow-slate-200 shadow-lg bg-right-bottom bg-cover cursor-pointer border-2 hover:border-[#8C52FF] transition duration-500 relative">
					<img
						src={imgURL}
						className="absolute h-[60%] right-5 bottom-5"
					/>
					<div className="my-5 ml-5 h-[70%] flex flex-col items-start justify-between">
						<div className="font-bold text-2xl w-[20%] ">{text}</div>
						<button
							className="bg-[#B175FF] rounded-3xl text-white py-1 pl-3 pr-1 flex items-center justify-center gap-2"
							onClick={() => setActiveIndex(index)}>
							<span>{index !== activeIndex ? "Practice" : ""}</span>
							<span className="bg-white rounded-full">{index !== activeIndex ? <IoIosArrowRoundForward className="text-black text-3xl rotate-45" /> : <IoIosArrowRoundForward className="text-black text-3xl rotate-[225deg]" />}</span>
						</button>
					</div>
				</div>
				{index === activeIndex && description.length > 0 && (
					<div className="w-[100%] bg-white mt-5 rounded-lg p-10 flex flex-col gap-4">
						{description.map((d, index) => {
							return (
								<div className="flex justify-around">
									<div className="bg-[#F1EAFF] rounded-full px-3 py-3 w-[65%] font-semibold text-gray-500 flex gap-5 items-center">
										<div classname="bg-[#8C52FF] rounded-full">
											<img
												src={d.imgURL}
												className="rounded-full w-10 h-10"
											/>
										</div>
										<div>{d.text}</div>
									</div>
									<button className="text-[#2561A1] border-2 border-[#8C52FF] rounded-full px-10 font-semibold hover:bg-[#8C52FF] hover:text-white transition-all duration-500">Start Now</button>
								</div>
							);
						})}
					</div>
				)}
			</>
		);
	};

	return (
		<div>
			<div className="flex justify-between text-lg">
				<div className="font-bold">All Assessments</div>
				<button className="font-semibold text-[#8C52FF]">See All</button>
			</div>
			<div className="flex flex-wrap justify-between">
				{allAssessements.map((value, index) => (
					<CardComponent
						key={index}
						data={value}
						index={index}
					/>
				))}
			</div>
		</div>
	);
};

export default AllAssessments;
