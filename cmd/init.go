package cmd

import (
	"log"
	"os"

	"github.com/duc-cnzj/execit/internal/utils"

	"github.com/spf13/cobra"
)

// initCmd represents the init command
var initCmd = &cobra.Command{
	Use:   "init",
	Short: "Generate configuration file",
	Run: func(cmd *cobra.Command, args []string) {
		if len(configExampleFile) > 0 {
			if utils.FileExists("config.yaml") {
				log.Println("config.yaml file already exists!")
				return
			}
			if err := os.WriteFile("config.yaml", configExampleFile, 0644); err != nil {
				log.Println("Failed to write to config.yaml file")
				return
			}
			log.Println("Created successfully!")
			return
		}
		log.Println("config example file is empty!")
	},
}
