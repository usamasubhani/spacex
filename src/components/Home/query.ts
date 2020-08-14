import gql from 'graphql-tag'

export const query_launch_list = gql`
    query LaunchList {
        launchesPast(limit: 10) {
        mission_name
        id
        links {
            flickr_images
            mission_patch_small
        }
        rocket {
            rocket_name
        }
        launch_date_utc
        }
    }  
`;