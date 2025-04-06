import React, { useState } from 'react';
import { LuIceCreamBowl } from "react-icons/lu";
import { FaDumbbell } from "react-icons/fa6";
import { BsMoonStars } from "react-icons/bs";
import { PiGenderIntersexBold } from "react-icons/pi";
import { MdOutlineCake } from "react-icons/md";
import { GiMuscleUp } from "react-icons/gi";
import { PiBaby } from "react-icons/pi";
import { IoBodyOutline } from "react-icons/io5";
import './BMIstyling.css';

function BMICaculator() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [unit, setUnit] = useState('metric');
  const [bmi, setBmi] = useState(null);
  const [message, setMessage] = useState('Enter your height and weight to see your BMI result here');

  const calculateBMI = () => {
    if (!height || !weight) {
      setMessage('Please enter valid height and weight values.');
      return;
    }

    let calculatedBMI;
    if (unit === 'metric') {
      calculatedBMI = weight / ((height / 100) * (height / 100));
    } else {
      calculatedBMI = (weight / (height * height)) * 703;
    }

    setBmi(calculatedBMI.toFixed(1));

    if (calculatedBMI < 18.5) {
      setMessage('You are underweight.');
    } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
      setMessage('You have a normal weight.');
    } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
      setMessage('You are overweight.');
    } else {
      setMessage('You are obese.');
    }
  };

  console.log("BMI:", bmi);
console.log("Message:", message);

  return (
    <>
      <main>
        <div className="hero-wrapper">
          <div className="text-and-calculator-holder">

            <div className="texts">
              <h2>Body Mass <br /> Index Calculator</h2>
              <p>
                Better understand your weight in relation to your height using <br />
                our body mass index (BMI) Calculator. While BMI is not the <br />
                sole determinant of healthy weight, it offers a valuable <br />
                starting point to evaluate your overall health and well-being.
              </p>
            </div>

            <div className="BMI-calculator">
              <h1 className='heading'>Enter your details below</h1>
              <div className="calculator-wrapper">

                <div className="metric-wrapper">
                  <div className="metric">
                    <input 
                      type="radio" 
                      className='check' 
                      name="unit" 
                      checked={unit === 'metric'} 
                      onChange={() => setUnit('metric')} 
                    />
                    Metric
                  </div>

                  <p className='title'>Height</p>
                  <div className="input-wrapper">
                    <input 
                      type="number" 
                      className='details-input' 
                      placeholder='0'
                      value={height}
                      onChange={(e) => setHeight(e.target.value)}
                    /> 
                    <h3>CM</h3>
                  </div>
                </div>

                <div className="imperial-wrapper">
                  <div className="metric">
                    <input 
                      type="radio" 
                      className='check' 
                      name="unit" 
                      checked={unit === 'imperial'} 
                      onChange={() => setUnit('imperial')} 
                    />
                    Imperial
                  </div>

                  <p className='title'>Weight</p>
                  <div className="input-wrapper">
                    <input 
                      type="number" 
                      className='details-input' 
                      placeholder='0'
                      value={weight}
                      onChange={(e) => setWeight(e.target.value)}
                    /> 
                    <h3>{unit === 'metric' ? 'KG' : 'LBS'}</h3>
                  </div>
                </div>
              </div>

              <button className="calculate-button" onClick={calculateBMI}>Calculate BMI</button>

              <div className="resultwrapper">
                <h1 style={{ color: "white", marginLeft: "30px", marginTop: "30px" }} className='result'>BMI Result</h1>
                <p style={{ color: "white", marginLeft: "30px", fontWeight: "500"}} className='message'>{message}</p>
              </div>
            </div>

          </div>
        </div>

        <div className="contents-wrapper">
          <div className="image-holder">
            <img src="/IMG/6_Steps_Toward_a_Healthier_and_Stronger_You__A_Guide_for_Men_-_Broke_and_Chic-removebg-preview.png" alt="" />
          </div>

          <div className="text-wrapper">
            <h1>What your BMI result <br />
            means</h1>

            <p>A BMI range of 18.5 to 249 is considered a 'healthy weight.' <br />
            Maintaining a healthy weight may lower your chances of <br />
            experiencing healthy issue later on, such as obesity and type <br />
            2 diabetes. Aim for a nutritious diet with reduced fat and <br />
            sugar content, content incorporating ample fruits and vegrtables. <br />
            Additionally, strive for a regular physical activity,ideally about <br />
            30 minutes daily for five days a week. </p>
          </div>
        </div>

        <div className="second-content-wrapper">
          <div className="protein-wrapper">
          <LuIceCreamBowl style={{fontSize: '50px', background: '#FEDBED', color: '#DB5E96', padding: '5px', borderRadius: '50px'}}/>
          <h2 style={{fontSize: '30px', marginTop: '30px'}}>Healthy eating</h2>
          <p style={{fontSize: '17px', color: 'grey'}}>Healthy eating promotes weight control, <br />
          disease prevention, better digestion, immunity, <br />
          mental clearity, and mood.</p>
          </div>


          <div className="protein-wrapper">
          <FaDumbbell style={{fontSize: '50px', background: '#FAEEE2', color: '#F4B274', padding: '5px', borderRadius: '50px'}}/>
          <h2 style={{fontSize: '30px', marginTop: '30px'}}>Regular exercise</h2>
          <p style={{fontSize: '17px', color: 'grey'}}>Exerceise improve fitness, aids weight control, <br />
          elevates mood, and reduce disease risk, <br />
          fostering wellness and longevity.</p>
          </div>

        
          <div className="protein-wrapper">
          <BsMoonStars style={{fontSize: '50px', background: '#FEDBED', color: '#DB5E96', padding: '5px', borderRadius: '50px'}}/>
          <h2 style={{fontSize: '30px', marginTop: '30px'}}>Adequate sleep</h2>
          <p style={{fontSize: '17px', color: 'grey'}}>Sleep ehances mental clarity, emotional <br />
          stabitlity, and physical wellness, promoting <br />
          overall restoration and rejuvenation.</p>
          </div>
        </div>


        <div className="third-content-wrapper">
          <div className="third-text-wrapper">
            <h2>Limitation of BMI</h2>
            <p style={{color:'grey', fontSize:'20px'}}>Although BMI is often a practical indicator of weight, it is not, <br />
            suitable for every person. Specific groyp should carefully consider their <br />
            BMI outcomes, and in certain cases, the measurement may not be <br />
            beneficial to use. </p>
          </div>

          <div className="cards"  > 
            <div className="icon-holder">
          <PiGenderIntersexBold style={{fontSize: '40px', color: '#DA6E53', marginLeft: '30px'}} />
          <h4>Gender</h4>
          </div> 

          <p style={{fontSize: '23px', marginLeft: '35px', color: 'grey'}}>The development and body fat <br />
           composure f girls and boys vary with <br />
           age. Consequently, a child age and <br />
           gender are considered when evaluating <br />
           their BMI.</p>

          </div>
        </div>




        <div className="fourth-content-wrapper">
         
        <div className="cards"> 
            <div className="icon-holder">
          <MdOutlineCake style={{fontSize: '40px', color: '#6EC8C6', marginLeft: '30px'}} />
          <h4>Age</h4>
          </div> 

          <p style={{fontSize: '23px', marginLeft: '35px', color: 'grey'}}>In aging individual, increased body fat <br />
           and muscle loss may cause BMI to<br />
           underestimate body fat content.<br /></p>

          </div>


                  
        <div className="cards"> 
            <div className="icon-holder">
          <GiMuscleUp style={{fontSize: '40px', color: '#A978E6', marginLeft: '30px'}} />
          <h4>Gender</h4>
          </div> 

          <p style={{fontSize: '23px', marginLeft: '35px', color: 'grey'}}>BMI may misclassify muscular<br />
           individuals as overweight or obese, as<br />
           it does not differentiate muscles from fat.<br /></p>

          </div>
        </div>





        <div className="fifth-wrapper">

        <div className="cards"> 
            <div className="icon-holder">
          <PiBaby style={{fontSize: '40px', color: '#DA6E53', marginLeft: '30px'}} />
          <h4>Pregnancy</h4>
          </div> 

          <p style={{fontSize: '23px', marginLeft: '35px', color: 'grey'}}>Expectant mother experience weight <br />
           gain due to there growing baby.<br />
           Maintaining a healthy pre-pregnancy<br />
           BMI is advisable for minimise health<br />
           risks for both mother and child</p>

          </div>

          <div className="cards"> 
            <div className="icon-holder">
          <IoBodyOutline style={{fontSize: '40px', color: '#C46293', marginLeft: '30px'}} />
          <h4>Race</h4>
          </div> 

          <p style={{fontSize: '23px', marginLeft: '35px', color: 'grey'}}>Certain health concern may affect<br />
           individual of some blacks and asian<br />
           origin of lower BMIs than others. To<br />
           learn more, it is advised to discuss this <br />
           with your GP or practice nurse</p>

          </div>

        </div>
      </main>
    </>
  );
}

export default BMICaculator;
