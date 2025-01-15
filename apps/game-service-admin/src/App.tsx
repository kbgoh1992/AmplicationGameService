import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import dataProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { SpecialPlayerList } from "./specialPlayer/SpecialPlayerList";
import { SpecialPlayerCreate } from "./specialPlayer/SpecialPlayerCreate";
import { SpecialPlayerEdit } from "./specialPlayer/SpecialPlayerEdit";
import { SpecialPlayerShow } from "./specialPlayer/SpecialPlayerShow";
import { PlayerList } from "./player/PlayerList";
import { PlayerCreate } from "./player/PlayerCreate";
import { PlayerEdit } from "./player/PlayerEdit";
import { PlayerShow } from "./player/PlayerShow";
import { GameRoundList } from "./gameRound/GameRoundList";
import { GameRoundCreate } from "./gameRound/GameRoundCreate";
import { GameRoundEdit } from "./gameRound/GameRoundEdit";
import { GameRoundShow } from "./gameRound/GameRoundShow";
import { ScoreList } from "./score/ScoreList";
import { ScoreCreate } from "./score/ScoreCreate";
import { ScoreEdit } from "./score/ScoreEdit";
import { ScoreShow } from "./score/ScoreShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  return (
    <div className="App">
      <Admin
        title={"GameService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="SpecialPlayer"
          list={SpecialPlayerList}
          edit={SpecialPlayerEdit}
          create={SpecialPlayerCreate}
          show={SpecialPlayerShow}
        />
        <Resource
          name="Player"
          list={PlayerList}
          edit={PlayerEdit}
          create={PlayerCreate}
          show={PlayerShow}
        />
        <Resource
          name="GameRound"
          list={GameRoundList}
          edit={GameRoundEdit}
          create={GameRoundCreate}
          show={GameRoundShow}
        />
        <Resource
          name="Score"
          list={ScoreList}
          edit={ScoreEdit}
          create={ScoreCreate}
          show={ScoreShow}
        />
      </Admin>
    </div>
  );
};

export default App;
