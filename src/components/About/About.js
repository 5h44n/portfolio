import React, {Component} from 'react';
import '../App.css'

export default class Header extends Component {
  render()  {
    return(
      <div className="row">
        <h3>About</h3>
        <p className="row col-md-4">Bent double, like old beggars under sacks,
        Knock-kneed, coughing like hags, we cursed through sludge,
        Till on the haunting flares we turned our backs,
        And towards our distant rest began to trudge.
        Men marched asleep. Many had lost their boots,
        But limped on, blood-shod. All went lame; all blind;
        Drunk with fatigue; deaf even to the hoots
        Of gas-shells dropping softly behind.
        </p>
        <p className="row col-md-4">Gas! GAS! Quick, boys!—An ecstasy of fumbling
        Fitting the clumsy helmets just in time,
        But someone still was yelling out and stumbling
        And flound’ring like a man in fire or lime.—
        Dim through the misty panes and thick green light,
        As under a green sea, I saw him drowning.
        </p>
        <p className="row col-md-4">In all my dreams before my helpless sight,
        He plunges at me, guttering, choking, drowning.
        </p>
        <p className="row col-md-4">If in some smothering dreams, you too could pace
        Behind the wagon that we flung him in,
        And watch the white eyes writhing in his face,
        His hanging face, like a devil’s sick of sin;
        If you could hear, at every jolt, the blood
        Come gargling from the froth-corrupted lungs,
        Obscene as cancer, bitter as the cud
        Of vile, incurable sores on innocent tongues,—
        My friend, you would not tell with such high zest
        To children ardent for some desperate glory,
        The old Lie: Dulce et decorum est
        Pro patria mori.
        </p>
      </div>
    )
  }
}
