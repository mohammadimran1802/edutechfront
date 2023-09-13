import { useState } from "react";

export default function Question({ question }: any) {
  const [answer, setAnswer] = useState<Boolean>();

  const handleAnswer = (value: any,index:number) => {
    console.log(value.value,"hello");
    console.log(question[index].correctAnswer,"hello");
    if (value.value === question[index].correctAnswer) {
      setAnswer(true);
    } else {
      setAnswer(false);
    }
  };

  console.log(answer);
  return (
    <>
      {question?.map((element: any,index:number) => (
        <div className=" w-full rounded overflow-hidden shadow-lg pt-5">
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">Assignment</div>
            <p className="text-gray-700 text-base pb-2">
              Q.{element.questionText}
            </p>
            <p>Answer:</p>
            <div className="px-10">
              <ul className="w-48 text-sm font-medium  bg-white  ">
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value={element?.options && element?.options[0]}
                      name="list-radio"
                      onClick={e => handleAnswer(e.target,index)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium ">
                      {element?.options && element?.options[0]}
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value={element?.options && element?.options[1]}
                      name="list-radio"
                      onClick={e => handleAnswer(e.target,index)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium ">
                      {element?.options && element?.options[1]}
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-license"
                      type="radio"
                      onClick={e => handleAnswer(e.target,index)}
                      value={element?.options && element?.options[2]}
                      name="list-radio"
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium ">
                      {element?.options && element?.options[2]}
                    </label>
                  </div>
                </li>
                <li className="w-full">
                  <div className="flex items-center pl-3">
                    <input
                      id="list-radio-license"
                      type="radio"
                      value={element?.options && element?.options[3]}
                      name="list-radio"
                      onClick={e => handleAnswer(e.target,index)}
                      className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500"
                    />
                    <label
                      htmlFor="list-radio-license"
                      className="w-full py-3 ml-2 text-sm font-medium ">
                      {element?.options && element?.options[3]}
                    </label>
                  </div>
                </li>
              </ul>
            </div>
            {answer && <div className="decoration-solid text-green-800">Correct Answer</div>}
          </div>
        </div>
      ))}
    </>
  );
}
