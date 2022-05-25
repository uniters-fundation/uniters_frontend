import React from "react";
import styled from "@emotion/styled";
import { css } from "@emotion/react";
import Image from "next/image";
import { SelectedCategoryType } from "../reducers/pledgeFormReducer";

enum ArmyItemTags {
  SOLDIER = "soldier",
  HAT = "czapka",
  FLASHLIGHT = "latarka",
  KNEE_ARMOR = "ochraniacz_na_kolana",
  BEDROLL = "śpiwór",
  KNIFE = "nóż_wojskowu",
  ELBOW_ARMOR = "ochraniacz_na_łokcie",
  TACTICAL_GLOVES = "rękacziwczki_taktyczne",
  SHIPPMENT_BOX = "rozładunek_wojskowy",
  BALISTIC_GLASSES = "okólary balistyczne",
  SHOES = "buty_wojskowe",
  BACKPACK = "plecak_wojskowy",
  TENT = "namiot",
  SUMMER_ARMY_SUIT = "letni_kombinezon_polowy",
  RADIOSTATION = " radiostacja",
  HELM = "hełm",
  MARK = "celownik",
  BULLETPTOF_VEST = "kamizelka_kuloodporna",
  QADROKOPTER = "kwadrokopter",
  SUBMACHINEGUN = "karabin_maszynowy",
  TERMOVISION = "termowizor",
}

const ITEMS_DIR = "/images/tags/defenders";

type ITagsSettings = Record<
  ArmyItemTags,
  {
    price: number;
    url: string | null;
    position?: {
      zIndex?: number;
      top?: string | 0;
      left?: string | 0;
      right?: string | 0;
      bottom?: string | 0;
      translate?: string[];
    };
  }
>;

export const armyPricesSettings: ITagsSettings = {
  [ArmyItemTags.SOLDIER]: {
    price: 0,
    url: `${ITEMS_DIR}/soldier.png`,
    position: {
      zIndex: 4,
      left: "50%",
      top: "60%",
      translate: ["-50%", "-50%"],
    },
  },
  [ArmyItemTags.HAT]: {
    price: 10,
    url: `${ITEMS_DIR}/10_soldier_czapka.png`,
  },
  [ArmyItemTags.FLASHLIGHT]: {
    price: 20,
    url: `${ITEMS_DIR}/20_soldier_latarka.png`,
  },
  [ArmyItemTags.KNEE_ARMOR]: {
    price: 30,
    url: `${ITEMS_DIR}/30_soldier_nakolanniki.png`,
  },
  [ArmyItemTags.BEDROLL]: {
    price: 40,
    url: `${ITEMS_DIR}/40_soldier_spiwor.png`,
  },
  [ArmyItemTags.KNIFE]: {
    price: 50,
    url: `${ITEMS_DIR}/50_soldier_noz.png`,
  },
  [ArmyItemTags.ELBOW_ARMOR]: {
    price: 60,
    url: `${ITEMS_DIR}/60_soldier_lokcie.png`,
  },
  [ArmyItemTags.TACTICAL_GLOVES]: {
    price: 70,
    url: `${ITEMS_DIR}/70_soldier_rekawice.png`,
  },
  [ArmyItemTags.SHIPPMENT_BOX]: {
    price: 80,
    url: `${ITEMS_DIR}/80_soldier_ladownica.png`,
  },
  [ArmyItemTags.BALISTIC_GLASSES]: {
    price: 90,
    url: `${ITEMS_DIR}/90_soldier_okulary.png`,
  },
  [ArmyItemTags.SHOES]: {
    price: 100,
    url: `${ITEMS_DIR}/100_soldier_buty.png`,
  },
  [ArmyItemTags.BACKPACK]: {
    price: 120,
    url: `${ITEMS_DIR}/120_soldier_plecak.png`,
  },
  [ArmyItemTags.TENT]: {
    price: 140,
    url: `${ITEMS_DIR}/140_soldier_namiot.png`,
    // position: { right: 0, bottom: "20%", transition: ["0%", "0%"], zIndex: 2 },
  },
  [ArmyItemTags.SUMMER_ARMY_SUIT]: {
    // Its whole soldier
    price: 160,
    url: null,
  },
  [ArmyItemTags.RADIOSTATION]: {
    price: 180,
    url: `${ITEMS_DIR}/180_soldier_radio.png`,
  },
  [ArmyItemTags.HELM]: {
    price: 200,
    url: `${ITEMS_DIR}/200_soldier_helm.png`,
  },
  [ArmyItemTags.MARK]: {
    price: 500,
    url: null,
  },
  [ArmyItemTags.BULLETPTOF_VEST]: {
    price: 1000,
    url: `${ITEMS_DIR}/1000_soldier_kamizelka.png`,
  },
  [ArmyItemTags.QADROKOPTER]: {
    price: 1500,
    url: `${ITEMS_DIR}/1500_soldier_kwadracopter.png`,
  },
  [ArmyItemTags.SUBMACHINEGUN]: {
    price: 2000,
    url: null,
  },
  [ArmyItemTags.TERMOVISION]: {
    price: 4000,
    url: null,
  },
};

type tagKeysUnionType = `${ArmyItemTags}`;

interface IProps {
  selectedPrice: number;
  variant: SelectedCategoryType;
}

export const TaggedImage = (props: IProps) => {
  const itemsKeys = Object.keys(armyPricesSettings).filter(
    (key) => !!armyPricesSettings[key as tagKeysUnionType].url
  );

  const settings =
    props.variant === SelectedCategoryType.DEFENDERS
      ? armyPricesSettings
      : null;

  return (
    <ImageHolder>
      <TaggedImageBase variant={props.variant}>
        <BackgrouroundImage
          key={"background"}
          src={
            props.variant === SelectedCategoryType.DEFENDERS
              ? "/images/tags/defenders/background (1).jpg"
              : "/images/tags/civilians/girl_0.jpg"
          }
          alt={"background"}
        />

        {settings &&
          itemsKeys.map((key) => {
            const itemSettings = settings[key as tagKeysUnionType];
            const isPricePointReached =
              settings[key as tagKeysUnionType].price <= props.selectedPrice;
            return (
              <ItemImage
                position={itemSettings.position}
                fadeIn={!!isPricePointReached}
                key={key}
                src={itemSettings.url as string}
                alt={key}
              />
            );
          })}
      </TaggedImageBase>
    </ImageHolder>
  );
};

const getAspectRatioBox = (height: number, width: number) => css`
  padding-top: ${`${(height / width) * 100}%`};
`;

const ImageHolder = styled.div`
  position: relative;
  width: 100%;
  ${getAspectRatioBox(1080, 960)};
  overflow: hidden;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    left: 0;
  }
`;

const BackgrouroundImage = styled.img`
  position: absolute;
  height: 100%;
  width: 100%;
`;

const ItemImage = styled.img<{
  fadeIn: Boolean;
  position?:
    | {
        top?: string | 0 | undefined;
        left?: string | 0 | undefined;
        right?: string | 0 | undefined;
        bottom?: string | 0 | undefined;
        translate?: string[];
        zIndex?: number;
      }
    | undefined;
}>`
  position: absolute;
  z-index: 5;

  ${(props) =>
    props.position
      ? css`
          top: ${props.position.top};
          left: ${props.position.left};
          right: ${props.position.right};
          bottom: ${props.position.bottom};
          z-index: ${props.position.zIndex};
          transform: ${props.position.translate &&
          css`translate(${props.position.translate[0]}, ${props.position.translate[0]}) scale(40%)`};

          @media screen and (max-width: 500px) {
            transform: ${props.position.translate &&
            css`translate(${props.position.translate[0]}, ${props.position.translate[0]}) scale(30%)`};
          }
        `
      : css`
          top: 60%;
          left: 50%;
          transform: translate(-50%, -50%) scale(40%);

          @media screen and (max-width: 500px) {
            transform: translate(-50%, -50%) scale(30%);
          }
        `};

  transition: opacity ease-in 0.5s;
  opacity: ${(props) => (props.fadeIn ? "1" : "0")};
`;

const TaggedImageBase = styled.div<{ variant: SelectedCategoryType }>`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  pointer-events: none;
`;
