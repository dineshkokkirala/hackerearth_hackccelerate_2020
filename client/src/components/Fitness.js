import React from 'react'

const Fitness = () => {
    return (
        <div>
            <h1>Fitness Tips</h1>
            <div className="accordion" id="accordionExample">
  <div className="card bg-info">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left text-warning" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        It can save your life-really!
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      Regularly doing cardio and strength training reduces your risk of heart disease, diabetes, and endometrial, colon, and breast cancers. The American Heart Association recommends exercising for 30-60 minutes on most days to reduce your risk of heart disease. (Whoa. This push-up test might be able to predict whether you'll have heart disease later in life.)
      </div>
    </div>
  </div>
  <div className="card bg-success">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        You'll feel less stressed and happier
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      Exercise has been proven to improve your mood and decrease anxiety. Studies show that the fitter you are, the better you'll be at handling the long-term effects of stress. One moderately intense 50-minute aerobic workout has been shown to significantly lower anxiety levels. And a study in the British Journal of Sports Medicine found that exercise may be more effective than drugs in treating mild to moderate depression.
      </div>
    </div>
  </div>
  <div className="card bg-info">
    <div className="card-header" id="headingThree">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        It strengthens your bones
        </button>
      </h2>
    </div>
    <div id="collapseThree" className="collapse" aria-labelledby="headingThree" data-parent="#accordionExample">
      <div className="card-body">
      Exercise increases bone density, helping prevent osteoporosis. High-intensity activity, like jumping and running, is most beneficial for preserving bone mass.
      </div>
    </div>
  </div>


  <div className="card bg-success">
    <div className="card-header" id="headingFour">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white " type="button" data-toggle="collapse" data-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
        Always warm up and cool down
        </button>
      </h2>
    </div>
    <div id="collapseFour" className="collapse" aria-labelledby="headingFour" data-parent="#accordionExample">
      <div className="card-body">
      This exercise tip will help you maintain your mobility and flexibility and prevent injury. Take 5-10 minutes to gradually raise your heart rate at the beginning of a workout and lower it afterward. Before strength training, do low-intensity cardio that recruits larger muscle groups like your legs, back, and core. Try this quick warm-up before every exercise sesh.
      </div>
    </div>
  </div>


  <div className="card bg-info">
    <div className="card-header" id="headingfive">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapsefive" aria-expanded="false" aria-controls="collapsefive">
        Take this jump-rope challenge.
        </button>
      </h2>
    </div>
    <div id="collapsefive" className="collapse" aria-labelledby="headingfive" data-parent="#accordionExample">
      <div className="card-body">
      "The best cardio workout is the jump-rope double-turn maneuver," says Michael Olajide Jr., former number one world middleweight contender and cofounder/trainer at AEROSPACE High Performance Center in New York City. "It's intense: You'll burn about 26 calories per minute! Do a basic jump for 5 minutes, then jump twice as high and turn the rope twice as fast so it passes under your feet twice before you land. This takes timing, patience and power. But you'll get in great shape just by working at it." (Once you've mastered that, up the ante with our 30-minute jump rope workout.)
      </div>
    </div>
  </div>


  <div className="card bg-success">
    <div className="card-header" id="headingsix">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapsesix" aria-expanded="false" aria-controls="collapsesix">
        Don't cruise through cardio
        </button>
      </h2>
    </div>
    <div id="collapsesix" className="collapse" aria-labelledby="headingsix" data-parent="#accordionExample">
      <div className="card-body">
      Increase intensity by doing intervals: After a warm-up, alternate 1-2 minutes of activity at a rate of perceived exertion, or RPE, of 7 or 8 with 2-4 minutes of lower-intensity periods (RPE of 3-4). Repeat 4-6 times. Use our handy guide to help determine your RPE during any workout.
      </div>
    </div>
  </div>

  <div className="card bg-info">
    <div className="card-header" id="headingseven">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseseven" aria-expanded="false" aria-controls="collapseseven">
        Tone up on the treadmill
        </button>
      </h2>
    </div>
    <div id="collapseseven" className="collapse" aria-labelledby="headingseven" data-parent="#accordionExample">
      <div className="card-body">
      "Save time at the gym with this 10-minute cardio/sculpt session: Hop on a treadmill holding a three- to five-pound dumbbell in each hand, and set the speed to a brisk walk. Do a 60-second set each of shoulder presses, biceps curls, triceps extensions, side laterals, front laterals and standing triceps kickbacks one after another as you walk. It's an amazing upper-body challenge that also gets your heart pumping. Do this series two or three times each week. As you improve, work up to doing 4-minute sets," says Michael George, trainer and author of Body Express Makeover.
      </div>
    </div>
  </div>


  <div className="card bg-success">
    <div className="card-header" id="headingeight">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapseeight" aria-expanded="false" aria-controls="collapseeight">
        Make over your running routine
        </button>
      </h2>
    </div>
    <div id="collapseeight" className="collapse" aria-labelledby="headingeight" data-parent="#accordionExample">
      <div className="card-body">
      "Unless you're training for a marathon, skip long, slow, distance running-sprinting builds more muscle. Add a few 10- to 60-second sprints to your run, slowing down just long enough to catch your breath between them," says Stephen Holt, ACE personal trainer. (See: How to Use Running for Weight Loss)
      </div>
    </div>
  </div>

  <div className="card bg-info">
    <div className="card-header" id="headingnine">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapsenine" aria-expanded="false" aria-controls="collapsenine">
        Use the talk test
        </button>
      </h2>
    </div>
    <div id="collapsenine" className="collapse" aria-labelledby="headingnine" data-parent="#accordionExample">
      <div className="card-body">
      If you can't speak a sentence or two with each breath, you're pushing too hard (unless you're purposely doing high-intensity interval).
      </div>
    </div>
  </div>



  <div className="card bg-success">
    <div className="card-header" id="headingten">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapseten" aria-expanded="false" aria-controls="collapseten">
        Get a jump on weight loss
        </button>
      </h2>
    </div>
    <div id="collapseten" className="collapse" aria-labelledby="headingten" data-parent="#accordionExample">
      <div className="card-body">
      "Add plyometric box jumps to your workout to improve your cardiovascular stamina and leg strength - you'll really sculpt your hamstrings, quads and glutes. Find a sturdy box that's at least one foot high [like a j/fit Plyometric Jump Box, $71; amazon.com]. Starting from a standing position, explosively jump to the middle of the box, then jump back down. Repeat 20 times," says George. (Related: Plyo Box Workout for Your Upper and Lower Body)
      </div>
    </div>
  </div>

  <div className="card bg-info">
    <div className="card-header" id="headingelevel">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseelevel" aria-expanded="false" aria-controls="collapseelevel">
        Watch the clock to lose weight
        </button>
      </h2>
    </div>
    <div id="collapseelevel" className="collapse" aria-labelledby="headingelevel" data-parent="#accordionExample">
      <div className="card-body">
      In a Journal of the American Medical Association study, women who racked up at least 200 cardio minutes a week for 18 months lost nearly 14 percent of their total body weight. Those who accumulated fewer than 150 minutes reduced their weight by less than 5 percent.
      </div>
    </div>
  </div>

  <div className="card bg-success">
    <div className="card-header" id="headingtwelve">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapsetwelve" aria-expanded="false" aria-controls="collapsetwelve">
        Power up your runs
        </button>
      </h2>
    </div>
    <div id="collapsetwelve" className="collapse" aria-labelledby="headingtwelve" data-parent="#accordionExample">
      <div className="card-body">
      "Adding wall sits to the end of every run will strengthen your quads, hamstrings, and glutes, improving your speed and endurance. Lean against a wall with your feet shoulder-width apart, then squat until your knees are bent at 45 degrees. Hold for 30-60 seconds; work up to doing 10 sets. Add a challenge by including heel raises: Lift your left heel, then the right, then lift both together twice," says Mindy Solkin, owner and head coach of The Running Center in New York City.
      </div>
    </div>
  </div>

  <div className="card bg-info">
    <div className="card-header" id="headingthirteen">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapsethirteen" aria-expanded="false" aria-controls="collapsethirteen">
        Lift like you mean it
        </button>
      </h2>
    </div>
    <div id="collapsethirteen" className="collapse" aria-labelledby="headingthirteen" data-parent="#accordionExample">
      <div className="card-body">
      If you can do the maximum number of suggested reps (usually 10-12) without feeling fatigued, add pounds (10-15 percent at a time). If you can't complete the minimum number of suggested reps (usually 8), reduce the weight in 10 percent increments until you can. Your last 1 or 2 reps should always feel tough, but doable.
      </div>
    </div>
  </div>


  <div className="card bg-success">
    <div className="card-header" id="headingfourteen">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapsefourteen" aria-expanded="false" aria-controls="collapsefourteen">
        Try this all-in-one toner
        </button>
      </h2>
    </div>
    <div id="collapsefourteen" className="collapse" aria-labelledby="headingfourteen" data-parent="#accordionExample">
      <div className="card-body">
      "A side-step squat with wood chop works your arms, torso, abs, back, legs, inner thighs and butt," says David Kirsch, trainer and author of The Ultimate New York Body Plan. "Stand with your feet shoulder-width apart holding a three- to four-pound medicine ball in your hands. Bend your arms up so that the ball is at eye level over your right shoulder. As you bring the ball toward your left knee, step out with your left leg and bend it no further than 90 degrees, keeping your right leg straight. Return to the starting position. Do 10 to 15 reps and repeat on the other leg."
      </div>
    </div>
  </div>

  <div className="card bg-info">
    <div className="card-header" id="headingsixteen">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapsesixteen" aria-expanded="false" aria-controls="collapsesixteen">
        Balance your body
        </button>
      </h2>
    </div>
    <div id="collapsesixteen" className="collapse" aria-labelledby="headingsixteen" data-parent="#accordionExample">
      <div className="card-body">
      To head off injuries, build good posture, and ensure you have strength for your favorite activities, do exercises for opposing muscle groups. During your weekly routines, if you work the quads, for example, do exercises for your hamstrings as well. The same applies for the biceps and triceps, chest and back and lower back and abs. (Ex: Here's what a perfectly balanced week of workouts looks like.)
      </div>
    </div>
  </div>


  <div className="card bg-success">
    <div className="card-header" id="headingseventeen">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapseseventeen" aria-expanded="false" aria-controls="collapseseventeen">
        Work out during your workday
        </button>
      </h2>
    </div>
    <div id="collapseseventeen" className="collapse" aria-labelledby="headingseventeen" data-parent="#accordionExample">
      <div className="card-body">
      "Sit on a stability ball to strengthen your core, and keep dumbbells or exercise tubing at your desk," says Gregory Florez, personal trainer in Salt Lake City, Utah. "Squeeze in 12 to 15 reps of exercises like dumbbell curls, overhead presses, and ab crunches; aim for two or three sets of each. This gives you more free time to fit in fun workouts like biking or tennis."
      </div>
    </div>
  </div>

  <div className="card bg-info">
    <div className="card-header" id="headingeighteen">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapseeighteen" aria-expanded="false" aria-controls="collapseeighteen">
        Take a day off between weight-lifting sessions
        </button>
      </h2>
    </div>
    <div id="collapseeighteen" className="collapse" aria-labelledby="headingeighteen" data-parent="#accordionExample">
      <div className="card-body">
      Always give muscle groups 48 hours of rest between resistance workouts to allow them time to adapt to the stress you put on them. If you must lift every day, don't target the same muscles in back-to-back sessions.
      </div>
    </div>
  </div>

  <div className="card bg-success">
    <div className="card-header" id="headingnineteen">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapsenineteen" aria-expanded="false" aria-controls="collapsenineteen">
        Super-sculpt your butt
        </button>
      </h2>
    </div>
    <div id="collapsenineteen" className="collapse" aria-labelledby="headingnineteen" data-parent="#accordionExample">
      <div className="card-body">
      "Get great glutes by targeting the muscles and connective tissues buried deep in your body. To hit them, do high-intensity squats, such as jump squats. Then, blast off butt flab with cross-country skiing, bleacher running, and stair climbing," says Steve Ilg, author of Total Body Transformation.
      </div>
    </div>
  </div>

  <div className="card bg-info">
    <div className="card-header" id="headingtwenty">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-warning" type="button" data-toggle="collapse" data-target="#collapsetwenty" aria-expanded="false" aria-controls="collapsetwenty">
        Don't let your routine become rote
        </button>
      </h2>
    </div>
    <div id="collapsetwenty" className="collapse" aria-labelledby="headingtwenty" data-parent="#accordionExample">
      <div className="card-body">
      To continue to make sculpting gains, this exercise tip is crucial: Change the moves, order, weight, sets, reps and/or rest periods you do at least every four weeks. Try mixing things up more often. According to a study in the Journal of Strength and Conditioning Research, subjects who varied the number of sets and reps from workout to workout saw greater strength gains-even at the same intensity-than those who stuck to the same routine.
      </div>
    </div>
  </div>

  <div className="card bg-success">
    <div className="card-header" id="headingdin">
      <h2 className="mb-0">
        <button className="btn btn-link btn-block text-left collapsed text-white" type="button" data-toggle="collapse" data-target="#collapsedin" aria-expanded="false" aria-controls="collapsedin">
        Intensify your push-up
        </button>
      </h2>
    </div>
    <div id="collapsedin" className="collapse" aria-labelledby="headingdin" data-parent="#accordionExample">
      <div className="card-body">
      Squat-thrust push-ups get you in great shape because they work your upper body, core, and lower body and improve agility, strength, and endurance all at once," says Keli Roberts, personal trainer in Los Angeles. "From a standing position, bend down, put your hands on the floor shoulder-width apart, and jump your feet back into plank position. If you're strong, cross your ankles; otherwise, jump your feet wide apart. Do a push-up, then jump your feet together or uncross your ankles. Jump your feet back to your hands and stand up. Do eight reps total, rest for one minute, and repeat.
      </div>
    </div>
  </div>
  
</div>



        </div>
    )
}

export default Fitness
