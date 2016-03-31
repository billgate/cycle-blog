module Index where

import Html exposing (..)
import Html.Attributes exposing (style)
import Html.Events exposing (onClick)

import BlogHeader


-- MODEL

type alias Model = Int

model : Model
model = 0

-- UPDATE

type Action = Nothing


update action model =
   model

-- VIEW

view : Signal.Address Action -> Model -> Html
view adress model =
    div []
      [ BlogHeader.view
      ]
