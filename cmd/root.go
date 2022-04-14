package cmd

import (
	"os"

	"github.com/duc-cnzj/execit/version"

	"github.com/spf13/cobra"
	"github.com/spf13/viper"
)

var (
	cfgFile string
	rootCmd = &cobra.Command{
		Use:     "app",
		Short:   "execit app.",
		Version: version.GetVersion().String(),
	}

	configExampleFile []byte
)

func Execute(configFile []byte) {
	configExampleFile = configFile
	if !version.GetVersion().HasBuildInfo() {
		rootCmd.AddCommand(testCmd)
	}
	rootCmd.AddCommand(initCmd)
	rootCmd.AddCommand(apiGatewayCmd)

	if err := rootCmd.Execute(); err != nil {
		os.Exit(1)
	}
}

func init() {
	rootCmd.PersistentFlags().StringVar(&cfgFile, "config", "", "config file (default is $DIR/config.yaml)")
	rootCmd.PersistentFlags().BoolP("debug", "", true, "debug mode.")
	rootCmd.PersistentFlags().StringP("app_port", "", "6000", "app port.")
	rootCmd.PersistentFlags().StringP("grpc_port", "", "", "grpc port.")
	viper.BindPFlag("debug", rootCmd.PersistentFlags().Lookup("debug"))
	viper.BindPFlag("app_port", rootCmd.PersistentFlags().Lookup("app_port"))
	viper.BindPFlag("grpc_port", rootCmd.PersistentFlags().Lookup("grpc_port"))
}
