export interface FollowersData {
    users:               User[];
    next_cursor:         number;
    next_cursor_str:     string;
    previous_cursor:     number;
    previous_cursor_str: string;
    total_count:         null;
} 

export interface User {
    id:                                 number;
    id_str:                             string;
    name:                               string;
    screen_name:                        string;
    location:                           string;
    description:                        string;
    url:                                null | string;
    entities:                           Entities;
    protected:                          boolean;
    followers_count:                    number;
    friends_count:                      number;
    listed_count:                       number;
    created_at:                         string;
    favourites_count:                   number;
    utc_offset:                         null;
    time_zone:                          null;
    geo_enabled:                        boolean;
    verified:                           boolean;
    statuses_count:                     number;
    lang:                               null;
    contributors_enabled:               boolean;
    is_translator:                      boolean;
    is_translation_enabled:             boolean;
    profile_background_color:           string;
    profile_background_image_url:       null | string;
    profile_background_image_url_https: null | string;
    profile_background_tile:            boolean;
    profile_image_url:                  string;
    profile_image_url_https:            string;
    profile_banner_url?:                string;
    profile_link_color:                 string;
    profile_sidebar_border_color:       ProfileSidebarBorderColor;
    profile_sidebar_fill_color:         ProfileSidebarFillColor;
    profile_text_color:                 string;
    profile_use_background_image:       boolean;
    has_extended_profile:               boolean;
    default_profile:                    boolean;
    default_profile_image:              boolean;
    following:                          null;
    follow_request_sent:                null;
    notifications:                      null;
    muting:                             null;
    blocking:                           null;
    blocked_by:                         null;
    translator_type:                    TranslatorType;
    withheld_in_countries:              any[];
}

export interface Entities {
    description: Description;
    url?:        Description;
}

export interface Description {
    urls: URL[];
}

export interface URL {
    url:          string;
    expanded_url: string;
    display_url:  string;
    indices:      number[];
}

export enum ProfileSidebarBorderColor {
    A8C7F7 = "A8C7F7",
    C0Deed = "C0DEED",
    C6E2Ee = "C6E2EE",
    D3D2CF = "D3D2CF",
    D9B17E = "D9B17E",
    Ffffff = "FFFFFF",
    The000000 = "000000",
    The5Ed4Dc = "5ED4DC",
    The86A4A6 = "86A4A6",
}

export enum ProfileSidebarFillColor {
    A0C5C7 = "A0C5C7",
    C0Dfec = "C0DFEC",
    D7Dede = "D7DEDE",
    Daecf4 = "DAECF4",
    Ddeef6 = "DDEEF6",
    E3E2De = "E3E2DE",
    Eadeaa = "EADEAA",
    Fce9B6 = "FCE9B6",
    Fff7Cc = "FFF7CC",
    The000000 = "000000",
    The95E8Ec = "95E8EC",
    The99Cc33 = "99CC33",
}

export enum TranslatorType {
    None = "none",
    Regular = "regular",
}
